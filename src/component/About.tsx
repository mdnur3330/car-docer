

import Container from '@/containet/Container'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <Container className="my-20">
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        {/* Left images */}
        <div className="flex-1 relative w-full flex justify-center">
          <Image
            src="/assets/images/about_us/person.jpg"
            alt="Technician working on a car engine"
            width={460}
            height={473}
            className="rounded-lg w-full max-w-[460px] h-auto"
          />
          <div className="absolute top-1/2 left-1/4 sm:left-1/3">
            <Image
              src="/assets/images/about_us/parts.jpg"
              alt="High-quality auto parts"
              width={327}
              height={332}
              className="rounded-lg border-4 border-white w-40 sm:w-56 md:w-72 h-auto"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 space-y-6 text-center lg:text-left px-4 lg:px-0">
          <h5 className="text-[#ff3831] font-bold text-lg sm:text-xl">About Us</h5>
          <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-snug">
            We are qualified <br className="hidden sm:block" /> & experienced <br className="hidden sm:block" /> in the automotive industry
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            At AutoCare Solutions, we have been delivering trusted car repair and maintenance
            services for over 15 years. Our team of certified technicians uses advanced
            diagnostic tools to ensure your vehicle runs smoothly and safely.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            From engine overhauls to routine oil changes, we take pride in offering transparent
            pricing, genuine parts, and exceptional customer service—keeping you and your car on
            the road with confidence.
          </p>
        </div>
      </div>
    </Container>
  )
}
