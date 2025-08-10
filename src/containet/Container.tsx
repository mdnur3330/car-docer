import React from 'react'
interface Props {
    children: React.ReactNode;
    className?: string
}

export default function Container({children, className}: Props) {
  return (
    <div className={`max-w-10/12 mx-auto ${className}`}>
        {children}
    </div>
  )
}
