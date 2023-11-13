import React from 'react'
import footerLogo from "@/assets/images/footerlogo.png"
import Flex from '../styles/Flex'
import Image from 'next/image'
import Paragraph from '../shared/Paragraph'
const FooterLogo = () => {
    const year = new Date().getFullYear()
    return (
        <Flex css={{
            flexDirection: "column",
            marginTop: "25px",
            width: "100%"
        }}>
            <Image
                src={footerLogo}
                width={100}
                height={100}
                alt='BrightHAt'
            />

            <Paragraph classNames='text-white mt-3 text-[14px]'>
                Copyright © {year} Brighthat limited. All Rights Reserved.
            </Paragraph>
        </Flex>
    )
}

export default FooterLogo