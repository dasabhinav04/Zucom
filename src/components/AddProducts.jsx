import axios from 'axios';
import React, { useRef, useState } from 'react';
import '../assets/css/AddProducts.css'

function AddProducts({ fetchProducts }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) {
      alert('Please fill all fields');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('subscribe', subscribe ? 'Yes' : 'No');
    if (image) formData.append('image', image);

    axios
      .post('http://localhost/React+php/Backend/api/add_product.php', formData)
      .then((response) => {
        if (response.data.status === 'success') {
          alert('Product added successfully');
          fetchProducts();
          setName('');
          setPrice('');
          setImage(null);
          if (fileInputRef.current) fileInputRef.current.value = '';
            const modalEl = document.getElementById('addProductModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
                modal.hide();

        } else {
          alert('Error adding product: ' + response.data.message);
        }
      })
      .catch((error) => {
        console.error('POST error:', error);
        alert('Error adding product');
      });
  };

  return (
<div className="container my-4">
  <div className="product-card mx-auto p-4 shadow">
    <h3 className="mb-3 text-light border-bottom pb-2">Add Product</h3>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label text-warning">Product Name:</label>
        <input
          type="text"
          className="form-control custom-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter product name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label text-warning">Product Price:</label>
        <input
          type="number"
          className="form-control custom-input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
        />
      </div>

      <div className="mb-3">
        <label className="form-label text-warning">Product Image:</label>
        <input
          type="file"
          className="form-control custom-input"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          ref={fileInputRef}
        />
      </div>

      <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
          id="availableCheck"
        />
        <label className="form-check-label text-light" htmlFor="availableCheck">
          Available
        </label>
      </div>

      <button type="submit" className="btn btn-warning fw-semibold px-4">
        Add Product
      </button>
    </form>
  </div>
</div>
  );
}

export default AddProducts;
