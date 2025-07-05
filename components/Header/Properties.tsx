import React from 'react'
import Flex from '../styles/Flex'
import Link from 'next/link'
type PropertiesProps = {
    items: {
        id: number
        name: string
        path: string
    }[]
    classNames: string
}
const Properties = ({ items, classNames }: PropertiesProps) => {
    return (
        <Flex css={{ flexDirection: "column" }} classNames={classNames}>
            {items.length > 0 && items.map((item) => (
                <li key={item.id}>
                    <Link href={`/${item.path}`}>{item.name}</Link>
                </li>
            ))}

        </Flex>
    )
}

export default Properties