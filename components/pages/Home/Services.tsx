import Title from '@/components/shared/Title'
import Flex from '@/components/styles/Flex'
import { services } from '@/scripts/services'
import React from 'react'
import Service from './Service'

const Services = () => {
    return (
        <section className='bg-blue px-3 py-2 rounded-t-xl z-10 relative pb-6'>
            <Title color='white'>
                How we are Better
            </Title>
            <Flex classNames='p-4'>
                {services.map((service) => (
                    <Service service={service} key={service.id} />
                ))}
            </Flex>
        </section>
    )
}

export default Services