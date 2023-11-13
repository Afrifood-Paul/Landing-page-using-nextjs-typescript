import React, { ReactNode } from 'react'
type TitleProps = {
    children: ReactNode
    color: string
}
const Title = ({ children, color }: TitleProps) => {
    return (
        <h2 className={`text-3xl text-${color} text-center`}>
            {children}
        </h2>
    )
}

export default Title