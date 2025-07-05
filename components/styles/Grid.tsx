import React, { CSSProperties, ReactNode } from 'react'

type GridProps = {
    children: ReactNode
    classNames?: string,
    css?: CSSProperties
}
const Grid = ({ children, classNames, css }: GridProps) => {
    return (
        <section className={`grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full ${classNames}`} style={css}>
            {children}
        </section>
    )
}

export default Grid