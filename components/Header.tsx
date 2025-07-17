"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Image */}
          <Link href="/" className="inline-block">
            <div className="relative h-6 w-20">
              <Image
                src="/logo.png"
                alt="RV Technologies Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            >
              Services
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Services
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Products
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
