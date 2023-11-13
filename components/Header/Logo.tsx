import React from 'react'
import logo from "@/assets/images/logo.png"
import Image from 'next/image'
const Logo = () => {
    return (
        <Image src={logo} width={120} height={120} alt='BrightHat' />
    )
}

export default Logo