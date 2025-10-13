'use client'
import React,{ useState } from 'react';
import Link from 'next/link';

const MainNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuItems = [
    { 
      label: 'Our Range', 
      href: '/products', 
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Models', href: '/products/all' },
        { label: 'Off-Road', href: '/products/offroad' },
        { label: 'Family', href: '/products/family' },
      ]
    },
    { 
      label: 'About', 
      href: '/about', 
      hasDropdown: true,
      dropdownItems: [
        { label: 'OUR HERITAGE', href: '/about/heritage' },
        { label: 'DESIGN & MANUFACTURING', href: '/about/manufacturing' },
        { label: 'LC CUSTOMS', href: '/about/customs' },
        { label: 'PARTNERS', href: '/about/partners', hasSubmenu: true },
        { label: 'AMBASSADORS', href: '/about/ambassadors', hasSubmenu: true },
        { label: 'LOTUS CARE', href: '/about/care' },
      ]
    },   
    { 
      label: 'VR Agent', 
      href: '/vr-agent', 
      hasDropdown: true,
      dropdownItems: [
        { label: 'Virtual Showroom', href: '/vr-agent/showroom' },
        { label: '360° Tours', href: '/vr-agent/tours' },
      ]
    },
    { 
      label: 'More', 
      href: '/more', 
      hasDropdown: true,
      dropdownItems: [
        { label: 'News & Updates', href: '/more/news' },
        { label: 'Gallery', href: '/more/gallery' },
        { label: 'FAQ', href: '/more/faq' },
      ]
    },
  ];

 const handleToggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleCloseDropdown = () => {
    debugger;
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="bg-cama-black text-white">
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
                <div 
                  key={item.label} 
                  className="relative"
                >
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleToggleDropdown(item.label)}
                      className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors font-medium py-6"
                    >
                      <span className="uppercase text-sm tracking-wide">{item.label}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
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
                    </button>
                  ) : (
                    <Link 
                      href={item.href}
                      className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors font-medium py-6"
                    >
                      <span className="uppercase text-sm tracking-wide">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3">
              <Link 
                href="/request-demo"
                className="bg-cama-green hover:bg-cama-leaf-green text-white px-6 py-2  font-medium transition-colors text-sm"
              >
                Request DEMO
              </Link>
              <Link 
                href="/build-your-own"
                className="bg-cama-green hover:bg-cama-leaf-green text-white px-6 py-2 font-medium transition-colors text-sm"
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

      {/* Full-width Dropdown Menu */}
      {menuItems.map((item) => (
        item.hasDropdown && activeDropdown === item.label && (
          <div
            key={`dropdown-${item.label}`}
            className="absolute left-0 right-0 bg-cama-black z-50"
            style={{ height: '400px' }}
          >
            <div className="container mx-auto px-4 py-12">
              {/* Section Title */}
              <h3 className="text-gray-400 text-xs uppercase tracking-widest mb-8 font-light">
                {item.label}
              </h3>

              {/* Dropdown Items */}
              <div className="grid grid-cols-1 gap-6">
                {item.dropdownItems?.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.label}
                    href={dropdownItem.href}
                    onClick={handleCloseDropdown}
                    className="group flex items-center justify-between text-white hover:text-gray-300 transition-colors"
                  >
                    <span className="text-xl font-light tracking-wide">
                      {dropdownItem.label}
                    </span>
                    {dropdownItem.hasSubmenu && (
                      <svg 
                        className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleCloseDropdown}
              className="absolute top-4 right-8 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            </div>
          )
        ))}
    </>
  );
};

export default MainNavigation;
