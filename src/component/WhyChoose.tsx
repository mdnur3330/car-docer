// import Container from '@/containet/Container'
// import Image from 'next/image'
// import React from 'react'

// export default function WhyChoose() {
//     const item = [
//         {id:1, titel:"Timely Delivery" , img: "/assets/icons/check.svg"},
//         {id:2, titel:"100% Guranty",  img: "/assets/icons/Group 38729.svg"},
//         {id:3, titel:"Best Equipment",  img: "/assets/icons/deliveryt.svg"},
//         {id:4, titel:"24/7 Support" ,  img: "/assets/icons/group.svg"},
//         {id:5, titel:"Timely Delivery", img: "/assets/icons/person.svg"},
//         {id:6, titel:"Expert Team",  img: "/assets/icons/Wrench.svg"}
  
//     ]
//   return (
//     <div className='my-30'>
//         <Container>
//             <div className='space-y-5 text-center my-10'>
//                 <h3 className='text-[#ff3811] font-semibold'>Core Features</h3>
//                 <h2 className='text-3xl font-semibold'>Why Choose Us</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id nemo minus esse maiores, impedit nulla facilis odio! Numquam quae suscipit vitae voluptate cupiditate quidem nisi nobis quos pariatur excepturi.</p>
//             </div>
//             <div className='grid grid-cols-3 md:grid-cols-6 gap-9 justify-between'>
//                {item.map(i => <div key={i.id} className='border flex flex-col gap-4 border-gray-400 rounded p-3 text-center font-medium'>
//                     <Image src={i.img} width={30} height={30} alt={i.titel} className='mx-auto '/>
//                             {i.titel}
//                 </div>)}
//             </div>
//         </Container>
//     </div>
//   )
// }



import Container from '@/containet/Container'
import Image from 'next/image'
import React from 'react'

export default function WhyChoose() {
    const item = [
        { id: 1, titel: "Timely Delivery", img: "/assets/icons/check.svg" },
        { id: 2, titel: "100% Guarantee", img: "/assets/icons/Group 38729.svg" },
        { id: 3, titel: "Best Equipment", img: "/assets/icons/deliveryt.svg" },
        { id: 4, titel: "24/7 Support", img: "/assets/icons/group.svg" },
        { id: 5, titel: "Trusted Service", img: "/assets/icons/person.svg" },
        { id: 6, titel: "Expert Team", img: "/assets/icons/Wrench.svg" }
    ];

    return (
        <div className='my-30'>
            <Container>
                <div className='space-y-5 text-center my-10'>
                    <h3 className='text-[#ff3811] font-semibold'>Core Features</h3>
                    <h2 className='text-3xl font-semibold'>Why Choose Us</h2>
                    <p>
                        We stand out in the automotive service industry by combining
                        advanced technology, skilled professionals, and customer-first
                        service. Our commitment is to deliver high-quality results, on time,
                        every time—so you can get back on the road with confidence.
                    </p>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-9 justify-between'>
                    {item.map(i => (
                        <div
                            key={i.id}
                            className='border flex flex-col gap-4 border-gray-400 rounded p-3 text-center font-medium'
                        >
                            <Image
                                src={i.img}
                                width={30}
                                height={30}
                                alt={i.titel}
                                className='mx-auto'
                            />
                            {i.titel}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
