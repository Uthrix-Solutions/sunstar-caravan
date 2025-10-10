import React from 'react';
import Link from 'next/link';

const MainNavigation = () => {
  const menuItems = [
    { label: 'About', href: '/about', hasDropdown: true },
    { label: 'Our Range', href: '/products', hasDropdown: true },
    { label: 'VR Agent', href: '/vr-agent', hasDropdown: true },
    { label: 'More', href: '/more', hasDropdown: true },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
              .logo
            </Link>
          </div>

          {/* Main Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link 
                  href={item.href}
                  className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors font-medium"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  )}
                </Link>
                {/* Dropdown placeholder - you can implement dropdown functionality later */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <div className="px-4 py-2 text-gray-800 text-sm">Dropdown items would go here</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/request-demo"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md font-medium transition-colors text-sm"
            >
              Request DEMO
            </Link>
            <Link 
              href="/build-your-own"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md font-medium transition-colors text-sm"
            >
              Build Your Own
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
