import Paragraph from '@/components/shared/Paragraph'
import Title from '@/components/shared/Title'
import Flex from '@/components/styles/Flex'
import { tutors } from '@/scripts/tutors'
import Image from 'next/image'
import React from 'react'

const Tutors = () => {
    return (
        <section className='py-16 bg-white'>
            <Title color='dark'>
                <span className='font-bold'> Meet some of our <span className='text-primary'>expert Tutors</span></span>
            </Title>

            <div className='w-[35rem] mx-auto mt-10'>
                <Flex classNames='w-full'>
                    {tutors.map((tutor) => (
                        <Flex key={tutor.id} css={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                            // gap: "10px"
                        }}>
                            <Image src={tutor.image} width={100} height={100} alt={tutor.name} />
                            <Paragraph classNames='text-md font-bold mt-3'>
                                {tutor.name}
                            </Paragraph>
                            <Paragraph classNames='text-[12px]'>
                                {tutor.subject}
                            </Paragraph>
                        </Flex>
                    ))}
                </Flex>
            </div>
        </section>
    )
}

export default Tutors