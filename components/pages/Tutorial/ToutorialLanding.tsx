import Grid from '@/components/styles/Grid'
import React from 'react'
import tutorialLanding from "@/assets/images/tutorials/TutorialLanding.png"
import Image from 'next/image'
import Flex from '@/components/styles/Flex'
import Paragraph from '@/components/shared/Paragraph'
import Button from '@/components/shared/Button'

const ToutorialLanding = () => {
    return (
        <section>
            <Grid>
                <Flex css={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "30px",
                    textAlign: "left"
                }}>
                    <h1 className='text-5xl font-bold '>Partner with us to <span className='text-primary'>improve</span> your grades</h1>
                    <Paragraph classNames='text-xl leading-7 w-[30rem]'>
                        Our 1-to-1 tutoring service comes with personalized attention and customized support to each student. We’re laser focused on outcome so you can rest assured that your learning goals will be accomplished.
                    </Paragraph>
                    <Button type='button' title='Get starteed' classNames='bg-primary text-white' />
                </Flex>

                <Image src={tutorialLanding} width={400} height={400} alt='Tutorial landing' className="w-full" />
            </Grid>
        </section>
    )
}

export default ToutorialLanding