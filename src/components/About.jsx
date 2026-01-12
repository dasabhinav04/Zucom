import React from "react";
import "../assets/css/About.css";
import Intro from "../assets/Images/Intro.png";
import add from "../assets/Images/add.png";
import view from "../assets/Images/view.png";
import edit from "../assets/Images/edit.png";
import del from "../assets/Images/del.png";
import find from "../assets/Images/find.png";
import database from "../assets/Images/database.png";



const About = () => {
  return (
    <div className="about-page container py-5 text-primary-emphasis">

      <h2 className="section-title mb-4 text-primary-emphasis">About Zu<strong>COM</strong></h2>

        <div className="text-center mt-4">
            <img src={Intro} alt="Img1" className="intro-img" />
        </div><br />
      <p>
        The <strong className="text-primary-emphasis">ZUCOM</strong> is a full-stack CRUD system that
        allows users to add, edit, delete, and search products with ease. It provides a responsive and
        user-friendly interface for managing product inventories.
      </p>

      <h4 className="section-subtitle mt-4 text-primary-emphasis">Key Features</h4>
      <ul>
            <div className="feature-box d-flex align-items-center gap-4 mt-4 p-3">
                
                <img src={add} alt="Img2" className="feature_img" />

                    <ul className="m-0">
                        <h3><strong> 1) Create (Add Products)</strong></h3> <br />
                        <li>Users can add new products using a modal form</li>
                        <li>Product fields include name, price, and image upload</li>
                        <li>Image files are stored on the server and paths saved in the database</li>
                        <li>Product list updates automatically after submit</li>
                    </ul>
            </div>
            <div className="feature-box2 d-flex align-items-center gap-4 mt-4 p-3">

                    <ul className="m-0">
                        <h3><strong> 2) Read (View Products)</strong></h3> <br />
                        <li>UProducts displayed in card/grid format</li>
                        <li>Supports product images, formatted prices, and mobile responsiveness</li>
                        <li>Data fetched via Axios from a REST-like PHP API</li>
                    </ul>

                    <img src={view} alt="Img2" className="feature_img" />
            </div>
            <div className="feature-box d-flex align-items-center gap-4 mt-4 p-3">
                
                <img src={edit} alt="Img2" className="feature_img" />

                    <ul className="m-0">
                        <h3><strong> 3) Update (Edit Products)</strong></h3> <br />
                        <li>Edit button opens a modal with pre-filled data</li>
                        <li>Users may update name, price, and optionally replace the product image</li>
                        <li>Data updates in MySQL and UI refreshes after save</li>
                    </ul>
            </div>
            <div className="feature-box2 d-flex align-items-center gap-4 mt-4 p-3">

                    <ul className="m-0">
                        <h3><strong> 4) Delete Products</strong></h3> <br />
                        <li>Clicking delete prompts confirmation</li>
                        <li>Removes product from both the database and UI</li>
                    </ul>

                    <img src={del} alt="Img2" className="feature_img" />
            </div>

            <div className="feature-box d-flex align-items-center gap-4 mt-4 p-3">
                
                <img src={find} alt="Img2" className="feature_img" />

                    <ul className="m-0">
                        <h3><strong> 3) Update (Edit Products)</strong></h3> <br />
                        <li>Live search bar with debouncing</li>
                        <li>Displays dropdown results without altering the page layout</li>
                        <li>Supports dynamic filtering from backend via Axios</li>
                        <li>Can handle “no results found” and loading states</li>

                    </ul>
            </div>
      </ul>

<div className="tech_stack">
<h4 className="section-subtitle mt-4 text-warning text-center">Tech Stack</h4>
<div className="scroller mt-4">
  <div className="track track1">
    <i className="fa-brands fa-react"></i>
    <i className="fa-brands fa-php"></i>
    <i className="fa-brands fa-bootstrap"></i>
    <i className="fa-solid fa-database"></i>
    <i className="fa-brands fa-html5"></i>
    <i className="fa-brands fa-css3"></i>
    <i className="fa-brands fa-font-awesome"></i>
  </div>

  <div className="track track2">
    <i className="fa-brands fa-react"></i>
    <i className="fa-brands fa-php"></i>
    <i className="fa-brands fa-bootstrap"></i>
    <i className="fa-solid fa-database"></i>
    <i className="fa-brands fa-html5"></i>
    <i className="fa-brands fa-css3"></i>
    <i className="fa-brands fa-font-awesome"></i>
  </div>
</div>
</div>
            <div className="feature-box d-flex align-items-center gap-4 mt-4 p-3">
                
                <img src={database} alt="Img2" className="feature_img" />

                    <ul className="m-0">
                        <h3><strong> Database Structure</strong></h3> <br />
                        <p>Products table contains:</p>
        <li>id (Primary Key)</li>
        <li>name (Product Name)</li>
        <li>price (Product Price)</li>
        <li>img (Image File Path)</li>

                    </ul>
            </div>



                        <div className="feature-box2 d-flex align-items-center gap-4 mt-4 p-3">

                    <ul className="m-0">
                        <h3><strong>Outcomes</strong></h3> <br />
                        <p>This project demonstrates:</p>
        <li>Real-time UI updates using React Hooks</li>
        <li>REST API communication using Axios</li>
        <li>File uploads and form handling</li>
        <li>Dynamic rendering & CRUD operations</li>
        <li>Responsive UI layout and modular components</li>

                    </ul>
            </div>
    </div>
  );
};

export default About;
