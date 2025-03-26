import React from 'react';
import { ShoppingBag, Heart, Search, Menu, User } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Leather Backpack',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Minimal Watch',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Sunglasses',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Running Shoes',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Menu className="h-6 w-6 mr-4 cursor-pointer" />
              <h1 className="text-2xl font-bold">ShopStyle</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="h-6 w-6 cursor-pointer" />
              <Heart className="h-6 w-6 cursor-pointer" />
              <ShoppingBag className="h-6 w-6 cursor-pointer" />
              <User className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            New Season Arrivals
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Discover our latest collection of premium fashion items. Quality meets style in every piece.
          </p>
          <div className="mt-10">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Women',
                image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
              },
              {
                name: 'Men',
                image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&q=80&w=800',
              },
              {
                name: 'Accessories',
                image: 'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&q=80&w=800',
              },
            ].map((category) => (
              <div
                key={category.name}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                We're dedicated to providing the best shopping experience with premium quality products.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@shopstyle.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Fashion St, Style City</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 ShopStyle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;