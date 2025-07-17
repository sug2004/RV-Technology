'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { products } from '../data/products';

export default function Products() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? products : products.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Heading */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
            <p className="text-lg text-gray-600 mb-4">
              Choose from a wide range of CNC repairable products and spares.
            </p>

            {/* 📄 Download Button */}
            <a
              href="/catalog.pdf"
              download
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              📄 Download Catalog
            </a>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'mechanical', 'electrical', 'battery', 'cooling', 'display', 'servo'].map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-5 py-2 rounded-full border font-medium capitalize transition-all ${
                  filter === type
                    ? 'bg-orange-600 text-white border-orange-600'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(product => (
              <div
                key={product.id}
                className="group p-6 rounded-xl shadow-sm bg-white border hover:shadow-lg hover:bg-orange-50 transition-all"
              >
                <div className="mb-2">
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-600 capitalize font-medium">
                    {product.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-700 transition-colors">
                  {product.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
