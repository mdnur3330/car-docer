import Container from '@/containet/Container'
import Image from 'next/image'
import React from 'react'

export default function PopulerProduct() {
    const items = [
        {img:"/assets/images/products/1.png", titel:"Cools Led Light", price:"$45"},
        {img:"/assets/images/products/2.png", titel:"Car Air Filter", price:"$45"},
        {img:"/assets/images/products/3.png", titel:"Car Engine Plug", price:"$45"},
        {img:"/assets/images/products/4.png", titel:"Cools Led Light", price:"$45"},
        {img:"/assets/images/products/5.png", titel:"Cools Led Light", price:"$45"},
        {img:"/assets/images/products/6.png", titel:"Cools Led Light", price:"$45"},
    ]
  return (
    <div>
        <Container>
            <div className='text-center space-y-4 my-10'>
                <h4 className='text-[#ff3811] font-semibold'>Popular Products</h4>
                <h2 className='text-3xl font-semibold'>Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-center'>
                {items.map((i,index) => <div key={index} className='shadow space-y-3'>
                    <Image src={i.img} width={96} height={66} alt='4r'className=' bg-base-200 mx-auto bg-[#F3F3F3] w-60 h-52 p-10 rounded-lg'/>
                        <div className='text-center py-2'>
                            <h3>{i.titel}</h3>
                            <h3 className='text-xl font-bold text-[#FF3811]'>{i.price}</h3>
                        </div>
                </div>)}
            </div>

        </Container>
    </div>
  )
}
