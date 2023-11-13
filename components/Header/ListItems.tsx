import React from 'react'
import { navItems } from '@/scripts/navItems'
import Item from './Item'
import Properties from './Properties'


const ListItems = () => {

    return (
        <ul className='nav-flex'>
            {navItems.map((item) => (
                <Item {...item} key={item.id} >
                    <Properties items={item.properties} classNames="nav-properties" />
                </Item>
            ))}
        </ul>
    )
}

export default ListItems