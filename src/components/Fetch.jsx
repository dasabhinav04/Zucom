import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import AddProducts from './AddProducts';
import '../assets/css/Fetch.css';

function Fetch() {
  const [products, setProducts] = useState([]);
  const [editproduct, setEditProduct] = useState(null);
  const [newname, setNewName] = useState('');
  const [newprice, setNewPrice] = useState('');
  const [newimg, setNewImg] = useState(null);
  const fileInputRef = useRef(null);

  const fetchProducts = () => {
    axios.get("http://localhost/React+php/Backend/api/fetch.php")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data.message === "NO DATA") {
          setProducts([]);
        }
      })
      .catch((error) => {
        console.error("Error Fetching Data:", error);
      });
  };

  const deleteProducts = (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    axios.post(
      "http://localhost/React+php/Backend/api/delete.php",
      { id },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((response) => {
      if (response.data.status === "success") {
        alert("Product deleted successfully");
        fetchProducts();
      } else {
        alert("Error: " + response.data.message);
      }
    })
    .catch((error) => {
      console.error("Delete Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to delete product");
    });
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setNewName(product.name);
    setNewPrice(product.price);
    setNewImg(null);

    if (fileInputRef.current) fileInputRef.current.value = "";

    const modal = new window.bootstrap.Modal(document.getElementById('editProductModal'));
    modal.show();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImg(file);
  };

  const handleUpdate = (id) => {
    if (!newname || !newprice) {
      alert("Name and price are required to update.");
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", newname);
    formData.append("price", newprice);
    if (newimg) formData.append("img", newimg);

    axios.post("http://localhost/React+php/Backend/api/edit.php", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert("Product updated successfully");
        fetchProducts();

        const modalEl = document.getElementById('editProductModal');
        const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
        modalInstance.hide();

        setEditProduct(null);
        setNewName("");
        setNewPrice("");
        setNewImg(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        alert("Error updating product: " + response.data.message);
      }
    })
    .catch((error) => {
      console.error("Error with update request:", error);
      alert("Error updating product");
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid my-4">

      {/* Add Product Button */}
      <button
        type="button"
        className="btn btn-warning fw-semibold px-4"
        data-bs-toggle="modal"
        data-bs-target="#addProductModal"
      >
        Add Product
      </button>

      {/* ADD PRODUCT MODAL */}
      <div className="modal fade" id="addProductModal" tabIndex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{ background: "#0c2545", color: "white" }}>
            <div className="modal-header">
              <h5 className="modal-title text-warning" id="addProductModalLabel">Add Product</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <AddProducts fetchProducts={fetchProducts} />
            </div>
          </div>
        </div>
      </div>

      {/* EDIT PRODUCT MODAL */}
      <div className="modal fade" id="editProductModal" tabIndex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content" style={{ background: "#0c2545", color: "white" }}>
            <div className="modal-header">
              <h5 className="modal-title text-warning" id="editProductModalLabel">Edit Product</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              {editproduct && (
                <>
                  <div className="mb-3">
                    <label className="form-label text-warning">Product Name:</label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      value={newname}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-warning">Price:</label>
                    <input
                      type="number"
                      className="form-control custom-input"
                      value={newprice}
                      onChange={(e) => setNewPrice(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label text-warning">Product Image:</label>
                    <input
                      type="file"
                      className="form-control custom-input"
                      onChange={handleImageChange}
                      ref={fileInputRef}
                    />

                    {editproduct.img && (
                      <div className="mt-2">
                        <label>Current Image:</label><br />
                        <img src={editproduct.img} alt="Current" style={{ width: "100px", borderRadius: "6px" }} />
                      </div>
                    )}

                    {newimg && <p className="text-info mt-1">New image selected: {newimg.name}</p>}
                  </div>
                </>
              )}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-warning fw-semibold" onClick={() => handleUpdate(editproduct.id)}>
                Update
              </button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid px-3 px-md-5 my-4">
        <div className="row">
          {products.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
              <div className="card h-100">
                <img
                  src={item.img}
                  className="card-img-top img-fluid"
                  alt={item.name}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text fw-bold">₹ {Number(item.price).toLocaleString('en-IN')}</p>
                  <div className='button_div'>
                    <button className="delete_btn" onClick={() => deleteProducts(item.id)}>
                    Delete
                  </button>
                  <button className="edit_btn" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Fetch;
