// import Container from '@/containet/Container'
// import Image from 'next/image'
// import React from 'react'

// export default function About() {
//   return (
//     <Container className='flex gap-3 my-30'>
//         <div className='flex-1 relative'>
//             <Image src='/assets/images/about_us/person.jpg' alt="banner-logo" width={460} height={473} className='rounded-lg'/>
//             <div className='absolute top-[50%] left-[30%]'>
//                 <Image src='/assets/images/about_us/parts.jpg' alt="banner-logo" width={327} height={332}  className="rounded border-5 border-white"/>
//             </div>
//         </div>
//         <div className='flex-1 space-y-6'>
//             {/* contint div */}
//             <h5 className='text-[#ff3831] font-bold text-xl'>About Us</h5>
//             <h3 className='font-bold text-5xl'>We are qualified <br /> & of experience <br /> in this field</h3>
//             <p className='text-gray-600'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

//             <p className='text-gray-600'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
//         </div>
//     </Container>
//   )
// }





import Container from '@/containet/Container'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <Container className='flex gap-3 my-30'>
      <div className='flex-1 relative'>
        <Image
          src='/assets/images/about_us/person.jpg'
          alt="Technician working on a car engine"
          width={460}
          height={473}
          className='rounded-lg'
        />
        <div className='absolute top-[50%] left-[30%]'>
          <Image
            src='/assets/images/about_us/parts.jpg'
            alt="High-quality auto parts"
            width={327}
            height={332}
            className="rounded border-5 border-white"
          />
        </div>
      </div>

      <div className='flex-1 space-y-6'>
        {/* content div */}
        <h5 className='text-[#ff3831] font-bold text-xl'>About Us</h5>
        <h3 className='font-bold text-5xl'>
          We are qualified <br /> & experienced <br /> in the automotive industry
        </h3>
        <p className='text-gray-600'>
          At AutoCare Solutions, we have been delivering trusted car repair and maintenance
          services for over 15 years. Our team of certified technicians uses advanced
          diagnostic tools to ensure your vehicle runs smoothly and safely.
        </p>

        <p className='text-gray-600'>
          From engine overhauls to routine oil changes, we take pride in offering transparent
          pricing, genuine parts, and exceptional customer service—keeping you and your car on
          the road with confidence.
        </p>
      </div>
    </Container>
  )
}
