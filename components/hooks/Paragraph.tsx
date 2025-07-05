import React, { ReactNode } from 'react'

type ParagraphProps = {
    children: ReactNode
    classNames: string
}
const Paragraph = ({ children, classNames }: ParagraphProps) => {
    return (
        <p className={`text-md ${classNames}`}>
            {children}
        </p>
    )
}

export default Paragraph