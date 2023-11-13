import Card from '@/components/shared/Card'
import Title from '@/components/shared/Title'
import Flex from '@/components/styles/Flex'
import Grid from '@/components/styles/Grid'
import { learners } from '@/scripts/learner'
import { FaStar } from "react-icons/fa"
import Image from 'next/image'
import React from 'react'
import Paragraph from '@/components/shared/Paragraph'

const Reviews = () => {
    return (
        <section className='py-10 px-16  bg-lightBlue'>
            <Title color='dark'>
                <span className='font-bold'>What our <span className='text-blue'>Learners</span> say</span>
            </Title>
            <Grid css={{
                alignItems: "flex-start",
            }}>
                <Flex css={{
                    flexDirection: "column",
                    gap: "30px",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    width: "100%",
                    marginTop: "40px"
                }}>
                    {learners.map((learner) => (
                        <Card classNames='px-3 py-7 rounded-lg w-96' key={learner.id}>
                            <Flex classNames='w-full sapce-x-4' css={{
                                justifyContent: "flex-start",
                                gap: "30px",
                                alignItems: "flex-start"
                            }}>
                                <Image
                                    src={learner.image}
                                    width={50} height={50}
                                    alt={learner.name}
                                    className=' rounded-full'
                                />
                                <div>
                                    <h3 className='text-[18px]'>{learner.name}</h3>
                                    <p className='text-[12px]'>{learner.state}</p>
                                </div>
                            </Flex>
                        </Card>
                    ))}
                </Flex>

                <Flex css={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "20px",
                    marginTop: "40px"
                }}>
                    <Title color='dark'>
                        <span className='text-[16px] font-semibold'>It was a great learning experience</span>
                    </Title>
                    <Flex classNames='stars space-x-4 text-md'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </Flex>
                    <Paragraph classNames='leading-7'>
                        In the heart of our community lies a place where young minds flourish, dreams take flight, and futures are forged. BrightHat Academy, a haven of learning and enlightenment, has been an essential cornerstone of our educational landscape, shaping the leaders of tomorrow and igniting the flames of curiosity.

                        Within the hallowed halls of BrightHat Academy, knowledge is not just imparted; it is celebrated. Every corner of this institution resonates with the joy of learning, and every teacher embodies the spirit of dedication and guidance. The school is a treasure trove of wisdom, where students are encouraged to explore their intellectual boundaries, to question, to innovate, and to soar.
                    </Paragraph>
                </Flex>
            </Grid>
        </section>
    )
}

export default Reviews