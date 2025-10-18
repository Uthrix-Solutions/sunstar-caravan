import React from 'react'
import Image from 'next/image'
import PolygonButton from './components/ui/polygonButton'

const page = () => {
  return (
    <div className="relative w-full h-screen">
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
        <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-r from-cama-green via- to- z-[6]" >
            {/* Content */}
        <div className="relative z-[20] h-full flex flex-col justify-end pb-16 px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl w-full">
            <div>
            {/* Heading */}
            <div className="text-white mb-6">
              <p className="text-lg md:text-xl font-light mb-2 tracking-wide">
                The All New
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                LC Series <span className="ml-4">2025</span>
              </h1>
            </div>
            {/* Description */}
            <p className="text-white/90 text-base md:text-lg max-w-2xl mb-8 font-light">
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
              aliquet odio mattis.
            </p>
</div>
            

            {/* CTA Button */}
            <div className="flex items-end">
                <PolygonButton>Explore</PolygonButton>
              </div>
          </div>
        </div>
            </div>
      </section>
    </div>
  );
}
export default page