import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "../assets/css/Search.css"

const Search = () => {
  const [searchData, setSearchData] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const wrapperRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchData(e.target.value);
  };

  const fetchSearchResults = () => {
    if (searchData.trim() === '') {
      setResults([]);
      setNoResults(false);
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get(`https://zucom.free.nf/api/search.php?search=${searchData}`)
      .then(response => {
        if (response.data.error) {
          setError('Error fetching data');
          setResults([]);
          setNoResults(true);
        } else {
          setResults(response.data);
          setNoResults(response.data.length === 0);
        }
      })
      .catch(() => {
        setError('Network error occurred');
        setResults([]);
        setNoResults(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      fetchSearchResults();
    }, 500);
    return () => clearTimeout(debounceTimeout);
  }, [searchData]);

  // Click outside dropdown to close
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" position-relative" ref={wrapperRef}>
      <div className="search-bar d-none d-lg-flex">
        <input
          type="text"
          value={searchData}
          onChange={handleSearchChange}
          placeholder="Search"
          className="search-input"
        />
      </div>

      {(loading || error || noResults || results.length > 0) && (
        <div className="search-dropdown">
          {loading && <div className="dropdown-item text-muted">Loading...</div>}
          {error && <div className="dropdown-item text-danger">{error}</div>}
          {noResults && !loading && <div className="dropdown-item text-muted">No results found</div>}

          {results.map(item => (
        <div className="dropdown-item result-item" key={item.id}>
          <div className="item-info">
            <div className="item-name"><b>{item.name}</b></div>
            <div className="item-price text-warning">₹ {Number(item.price).toLocaleString('en-IN')}</div>
          </div>

          {item.img && (
            <img src={item.img} alt="" className="item-img" />
          )}
        </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
