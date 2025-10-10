import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Column 1: LOGO and Description */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold uppercase text-base mb-6 tracking-wide">LOGO</h3>
            <p className="text-gray-300 text-sm leading-6 font-normal">
              Proudly Australian made and owned since 2004, Lotus Caravans combines unique designs with top-quality materials and exceptional workmanship to deliver a caravanning lifestyle that&apos;s second-to-none.
            </p>
          </div>

          {/* Column 2: OFF ROAD PACKAGE & ON ROAD PACKAGE */}
          <div className="lg:col-span-1">
            <div className="mb-10">
              <h4 className="text-white font-bold uppercase text-base mb-6 tracking-wide">OFF ROAD PACKAGE</h4>
              <ul className="space-y-3">
                <li><Link href="/trooper" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Trooper</Link></li>
                <li><Link href="/freelander" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Freelander</Link></li>
                <li><Link href="/off-grid" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Off Grid</Link></li>
                <li><Link href="/lcx" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">LCX</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase text-base mb-6 tracking-wide">ON ROAD PACKAGE</h4>
              <ul className="space-y-3">
                <li><Link href="/hollywood" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Hollywood</Link></li>
                <li><Link href="/crystal-river" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Crystal River</Link></li>
                <li><Link href="/transformer" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Transformer</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: HOW TO BUY */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold uppercase text-base mb-6 tracking-wide">HOW TO BUY</h4>
            <ul className="space-y-3">
              <li><Link href="/request-quote" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Request a Quote</Link></li>
              <li><Link href="/build-your-own" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Build Your Own</Link></li>
              <li><Link href="/dealer-spot" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Dealer Spot</Link></li>
              <li><Link href="/brochure-download" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Brochure Download</Link></li>
              <li><Link href="/shop" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Shop</Link></li>
              <li><Link href="/stock" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Stock</Link></li>
            </ul>
          </div>

          {/* Column 4: ABOUT */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold uppercase text-base mb-6 tracking-wide">ABOUT</h4>
            <ul className="space-y-3">
              <li><Link href="/our-history" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Our History</Link></li>
              <li><Link href="/manufacturing" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Manufacturing</Link></li>
              <li><Link href="/our-partners" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Our Partners</Link></li>
              <li><Link href="/ambassadors" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Ambassadors</Link></li>
              <li><Link href="/sunstar-care" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Sunstar Care</Link></li>
            </ul>
          </div>

          {/* Column 5: EXPLORE */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold uppercase text-base mb-6 tracking-wide">EXPLORE</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Blog</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Events</Link></li>
              <li><Link href="/videos" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Videos</Link></li>
              <li><Link href="/find-a-repairer" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Find A Repairer</Link></li>
              <li><Link href="/book-a-factory-tour" className="text-gray-300 hover:text-white transition-colors text-sm font-normal">Book A Factory Tour</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Separator Line */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-600"></div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm font-normal">
            Privacy Policy | All rights reserved. @ 2025 Sunstar Caravans.
          </p>
        </div>
      </div>

    </footer>
  )
}
export default Footer