import React from 'react'
import Flex from '../styles/Flex'
import Logo from './Logo'
import ListItems from './ListItems'
import Button from '../shared/Button'
import Link from 'next/link'
import { BsTelephone } from "react-icons/bs"

const Header = () => {
    return (
        <Flex classNames='header z-10'>
            <Logo />
            <ListItems />
            <Link href={"#"} className='text-md text-gray-900 font-semibold flex items-center justify-center'>
                <BsTelephone />
                <span>+2349064941998</span>

            </Link>
            <Button title='Login/Sign up' type='button' classNames='text-primary' ></Button>
        </Flex>
    )
}

export default Header