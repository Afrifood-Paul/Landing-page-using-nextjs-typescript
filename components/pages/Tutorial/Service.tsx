import Paragraph from '@/components/shared/Paragraph'
import Flex from '@/components/styles/Flex'
import { ServiceType } from '@/scripts/services'
import Image from 'next/image'
import React from 'react'
type ServiceProps = {
    service: ServiceType
}
const Service = ({ service }: ServiceProps) => {
    return (
        <Flex
            classNames='text-dark text-center'
            css={{
                flexDirection: "column",
                columnGap: "20px",
                padding: "0 10px",
                justifyContent: "flex-start"
            }}>
            <div className='py-3'>
                <Image src={service.serviceImage} width={200} height={50} alt={service.title} className='w-full' />
            </div>

            <h3 className='py-3 text-primary'>{service.title}</h3>
            <Paragraph classNames='text-center'>
                {service.description}
            </Paragraph>
        </Flex>
    )
}

export default Service