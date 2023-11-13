import React from 'react'
import Title from '../shared/Title'
import NewsLetter from './NewsLetter'
import Flex from '../styles/Flex'
import Grid from '../styles/Grid'
import FooterLogo from './FooterLogo'
import FooterListItems from './FooterListItems'

const Footer = () => {
    return (
        <footer className='footer px-2 py-7'>
            <Title color='white'>
                Subscribe to our Monthly Newsletters
            </Title>
            <Flex css={{
                justifyContent: "center"
            }}>
                <NewsLetter />
            </Flex>

            <Flex>
                <FooterLogo />
                <FooterListItems />
            </Flex>
        </footer>
    )
}

export default Footer