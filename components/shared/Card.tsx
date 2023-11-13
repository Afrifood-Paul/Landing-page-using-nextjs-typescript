import React, { ReactNode } from 'react'

type CardProps = {
    children: ReactNode
    classNames?: string
}

const Card = ({ children, classNames }: CardProps) => {
    return (
        <div className={`drop-shadow-md bg-white ${classNames}`}>
            {children}
        </div>
    )
}

export default Card