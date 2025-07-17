"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="RV Technologies Logo"
                width={100}
                height={20} 
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 max-w-sm">
              We create exceptional digital experiences that drive business
              growth and deliver measurable results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {[
                ["About", "/about"],
                ["Services", "/services"],
                ["Products", "/products"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                ["https://linkedin.com", "ri-linkedin-fill"],
                ["https://twitter.com", "ri-twitter-fill"],
                ["https://github.com", "ri-github-fill"],
                ["https://dribbble.com", "ri-dribbble-fill"],
              ].map(([href, icon]) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <i className={`${icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} RV Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
