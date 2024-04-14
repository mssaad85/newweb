// Home.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bike1 from './bike1.webp'; // Import images
import bike2 from './bike2.webp';
import Product from './Product'; // Import Product component
import './Home.css'; // Import CSS file for styling

function Home() {
  // Slider configuration settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000 // Set autoplay speed (milliseconds)
  };

  return (
    <div className="home-container">
      <Slider {...settings}>
        <div>
          <img src={bike1} alt="Product 1" className="slider-image" /> {/* Use imported images */}
        </div>
        <div>
          <img src={bike2} alt="Product 2" className="slider-image" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <Product
            image={bike1}
            name="Super bike"
            description="The most super bike ever with many many otion to use "
            price={100}
          />
          <Product
            image={bike2}
            name="Racer Bike"
            description="Description of Product 2"
            price={129.99}
          />
          {/* Add more Product components with different data */}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
