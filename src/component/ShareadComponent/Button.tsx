import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
    onClick?: ()=> void;
    className?: string;
    type: "button" | "submit" | "reset";
}

const  Button: React.FC<ButtonProps>  = ({
    children,
    onClick,
    className = "",
    type = "button"
})=> {
  return (
    <button 
    onClick={onClick}
    type={type}
    className={`px-4 py-2 cursor-pointer ${className}`}
    >
        {children}
    </button>
  )
}

export default Button
