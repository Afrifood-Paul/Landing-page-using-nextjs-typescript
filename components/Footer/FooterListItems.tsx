import React from 'react'
import Flex from '../styles/Flex'
import Title from '../shared/Title'
import Link from 'next/link'
import { footerItems } from '@/scripts/footerItems'

const FooterListItems = () => {
    return (
        <Flex css={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            columnGap: "20px",
            marginTop: '10px',
            width: "100%"
        }}>
            {footerItems.map((item) => (
                <Flex key={item.id} css={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    columnGap: "20px"
                }}>
                    <Title color='white'>
                        <span className='text-sm font-normal capitalize'>{item.name}</span>
                    </Title>
                    <ul>
                        {item.properties.map((property) => (
                            <li><Link href={"/"} className='text-white text-sm'>{property.name}</Link></li>
                        ))}
                    </ul>
                </Flex>
            ))}
        </Flex>
    )
}

export default FooterListItems