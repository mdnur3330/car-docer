import Container from '@/containet/Container'
import Image from 'next/image'
import React from 'react'

export default function notfound() {
  return (
    <div>
        <Container>
            <div>
                <Image src="/assets/images/404/Frame (1).png" width={560} height={450} alt='' className='mx-auto'/>
            </div>
        </Container>
    </div>
  )
}
