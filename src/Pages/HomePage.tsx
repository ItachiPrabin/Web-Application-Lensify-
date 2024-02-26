// components/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

import ProductCard from './ProductCard';

const HomePage: React.FC = () => {
  // Mock data for demonstration
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, imageUrl: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 39.99, imageUrl: 'product3.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="home-page bg-gray-100">
      {/* Navbar */}
      <nav className="bg-red-500 shadow-lg"> {/* Changed bg-white to bg-red-500 */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">E-commerce Store</h1> {/* Changed text color to white */}
            </div>
            {/* Navigation Links */}
            <div className="flex space-x-4">
              <Link to="/feature-product" className="text-gray-200 hover:text-white">Feature Product</Link> {/* Changed text color to gray-200 */}
              <Link to="/new-product" className="text-gray-200 hover:text-white">New Product</Link> {/* Changed text color to gray-200 */}
            </div>
            {/* Search Bar */}
            <div className="flex">
              <input type="text" placeholder="Search..." className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              <button className="px-3 py-1 bg-blue-500 text-white rounded-md ml-2">Search</button>
            </div>
            {/* Login Button */}
            <div className="flex items-center space-x-">
              {/* Spacer */}
              <div className="flex-grow"></div>
              <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to My E-commerce Store</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* Add more sections like featured products, promotional banners, etc. */}
      </div>
    </div>
  );
};

export default HomePage;
