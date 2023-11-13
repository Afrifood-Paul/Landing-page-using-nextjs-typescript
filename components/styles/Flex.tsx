import React, { CSSProperties, ReactNode } from 'react'

type FlexProps = {
    children: ReactNode
    css?: CSSProperties
    classNames?: string
}
const Flex = ({ css, children, classNames }: FlexProps) => {
    return (
        <section className={`flex flex-row items-center justify-between ${classNames}`} style={css}>
            {children}
        </section>
    )
}

export default Flex