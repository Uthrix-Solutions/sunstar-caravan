import React from 'react'
import Image from 'next/image'
import PolygonButton from './components/ui/polygonButton'

const page = () => {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/IMG_8093.JPG"
          alt="Supreme LC Series Caravan"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[5]" />

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-r from-cama-green/80 via-cama-green/60 to-transparent z-[6]">
          {/* Content */}
          <div className="relative z-[20] h-full flex flex-col justify-center pb-8 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl w-full">
              {/* Heading */}
              <div className="text-white mb-4">
                <p className="text-lg md:text-xl font-light mb-2 tracking-wide">
                  The All New
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  LC Series <span className="ml-4">2025</span>
                </h1>
              </div>
              {/* Description */}
              <p className="text-white/90 text-base md:text-lg max-w-2xl mb-6 font-light">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis.
              </p>

              {/* CTA Button */}
              <div className="flex items-end">
                <PolygonButton>Explore</PolygonButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">Product Range</h2>
            <div className="w-32 h-1 bg-black mx-auto mt-4"></div>
          </div>

          {/* Product Card - Tropper */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-600 mb-2 tracking-wider">OFF ROAD</p>
              <h3 className="text-5xl md:text-6xl font-bold mb-6 italic text-black">TROPPER</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <PolygonButton>Explore</PolygonButton>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/tropper.png"
                alt="Tropper Caravan"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-2xl font-bold">YouTube</div>
              <button className="ml-auto bg-red-600 text-white px-6 py-2 rounded">Subscribe</button>
            </div>
            <div className="aspect-video bg-purple-200 rounded-lg flex items-center justify-center">
              <Image
                src="/images/youtube-placeholder.png"
                alt="YouTube Video"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customize Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-600 mb-2 tracking-wider">LET&#39;S BUILD YOUR DREAM</p>
              <h3 className="text-5xl md:text-6xl font-bold mb-6 text-black">Customize Your Dream Caravan</h3>
              <PolygonButton>LET&#39;S START</PolygonButton>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/customize-caravan.png"
                alt="Customize Caravan"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">FEATURED</h2>
            <div className="w-32 h-1 bg-black mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Featured Card 1 */}
            <div className="relative group cursor-pointer">
              <div className="relative h-64 mb-4">
                <Image
                  src="/images/featured-1.png"
                  alt="Featured 1"
                  fill
                  className="object-cover"
                />
              </div>
              <PolygonButton>MORE</PolygonButton>
            </div>

            {/* Featured Card 2 */}
            <div className="relative group cursor-pointer">
              <div className="relative h-64 mb-4">
                <Image
                  src="/images/featured-2.png"
                  alt="Tyres on Havan"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">TYRES ON HAVAN!!!</h3>
                </div>
              </div>
              <PolygonButton>MORE</PolygonButton>
            </div>

            {/* Featured Card 3 */}
            <div className="relative group cursor-pointer">
              <div className="relative h-64 mb-4">
                <Image
                  src="/images/featured-3.png"
                  alt="Vans"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">VANS</h3>
                </div>
              </div>
              <PolygonButton>MORE</PolygonButton>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-around items-center flex-wrap gap-8">
            <Image src="/images/logo-caravan.png" alt="Caravan" width={180} height={180} />
            <Image src="/images/logo-camper.png" alt="Camper" width={180} height={180} />
            <Image src="/images/logo-extreme.png" alt="Extreme" width={180} height={180} />
            <Image src="/images/logo-camper-2.png" alt="Camper" width={180} height={180} />
            <Image src="/images/logo-experience.png" alt="Experience" width={180} height={180} />
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">EXPLORE</h2>
            <div className="w-32 h-1 bg-black mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Explore Card 1 */}
            <div>
              <div className="relative h-80 mb-6">
                <Image
                  src="/images/explore-1.png"
                  alt="What&#39;s New About LC 5"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">What&#39;s New About LC 5</h3>
              <p className="text-gray-600 mb-6">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <PolygonButton>Explore</PolygonButton>
            </div>

            {/* Explore Card 2 */}
            <div>
              <div className="relative h-80 mb-6">
                <Image
                  src="/images/explore-2.png"
                  alt="Explore About Design"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Explore About Design</h3>
              <p className="text-gray-600 mb-6">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
              <PolygonButton>Explore</PolygonButton>
            </div>
          </div>
        </div>
      </section>    
    </div>
  );
}

export default page