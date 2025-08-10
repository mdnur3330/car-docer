"use client";
import Container from '@/containet/Container'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Button from './ShareadComponent/Button';
import { FaArrowCircleRight } from 'react-icons/fa';
import Link from 'next/link';

type USer = {
  _id: string;
  name: string;
  title: string;
  img: string;
  price: string
}

export default function Services() {
  const [data, setData] = useState<USer[]>([])

  useEffect(()=>{
    fetch("/services.json")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error =>{
      console.log(error);
    })
  },[])
  console.log(data);
  return (
    <div className='my-10'>
        <Container>
            <div className='text-center space-y-4 my-10'>
                <h3 className='text-[#ff3811] font-semibold'>Service</h3>
                <h2 className='text-3xl font-semibold'>Our Service Area</h2>
                <p>We provide high-quality car repair and maintenance services across multiple locations. 
  From engine diagnostics to full body repairs, our expert technicians ensure your vehicle 
  gets the best care possible.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
              {data.map(item => <div key={item._id} className='space-y-2 drop-shadow-lg'>
                      <Image src={item.img} width={400} height={380} alt={item.title} className='w-[378px] h-[200px] rounded-lg' />
                      <h3 className='text-2xl font-bold '>{item.title}</h3>
                     <div className='flex justify-around items-center text-[#FF3811]'>
                       <p className='text-xl font-bold'>{item.price}</p>
                      <Link href={`services/${item._id}`}><FaArrowCircleRight /></Link>
                     </div>
              </div>)}
            </div>
            <div className='text-center'>
              <Button type='button' className='mx-auto my-10 text-[#FF3811] border border-[#FF3811]'>More Services</Button>
            </div>
        </Container>
    </div>
  )
}
