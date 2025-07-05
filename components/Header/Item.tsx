"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode, } from 'react'

type ItemProps = {
    children?: ReactNode,
    name: string
    path: string
}
const Item = ({ children, name, path }: ItemProps) => {
    const pathname = usePathname()
    return (
        <li className={pathname === path ? "active_nav" : ""}>
            <Link href={""} >{name}</Link>
            {children}
        </li>
    )
}

export default Item