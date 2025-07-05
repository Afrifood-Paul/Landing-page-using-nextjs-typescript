import Link from 'next/link'
import React, { ReactNode } from 'react'
type LinkButtonProps = {
    url: string
    children: ReactNode
}

const LinkButton = ({ children, url }: LinkButtonProps) => {
    return (
        <Link
            href={url}
            className='mt-4 inline-block px-3 py-2 text-blue bg-lightBlue rounded-sm font-bold cursor-pointer'
        >{children}</Link>
    )
}

export default LinkButton