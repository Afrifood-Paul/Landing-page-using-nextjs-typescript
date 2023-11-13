import React, { ReactNode } from 'react'
type ButtonProps = {
    title: string
    classNames?: string
    type: "submit" | "button",
    children?: ReactNode
}
const Button = ({ title, type, children, classNames }: ButtonProps) => {
    return (

        <button type={type} className={`button ${classNames}`}>
            {title}
            {children}
        </button>
    )
}

export default Button