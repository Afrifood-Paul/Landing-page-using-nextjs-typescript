import Grid from '@/components/styles/Grid'
import Image from 'next/image'
import React from 'react'
import homeTwoImage from "@/assets/images/home2.png"
import Button from '@/components/shared/Button'
import Services from './Services'

const SectionTwo = () => {
    return (
        <main className='bg-white p-5  rounded-3xl relative'>
            <Grid>
                <div className='w-3/4'>
                    <Image src={homeTwoImage} width={350} height={350} alt='Achievements' className='w-full' />
                </div>
                <div className='w-full'>
                    <h1 className='text-[32px] font-bold'>Achieving your desired outcome is easier with us</h1>
                    <p className='text-md text-left'>Our team is made up of seasoned educators and technologists who are passionate about using technology tools to improve learning outcomes for students and language learners alike. With us, you can rest assured that your learning goals will be accomplished.</p>
                    <Button title='Experience It' type='button' classNames='mt-6 bg-primary text-white' />
                </div>

            </Grid>

            <Services />

            <div className='blur-bg'></div>
        </main>

    )
}

export default SectionTwo