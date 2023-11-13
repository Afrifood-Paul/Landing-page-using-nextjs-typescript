import Button from '@/components/shared/Button'
import Grid from '@/components/styles/Grid'
import Image from 'next/image'
import React from 'react'
import heroImage from "@/assets/images/hero.png"

const Landing = () => {
    return (

        <Grid>
            <div className='w-full mt-4'>
                <span className='text-sm py-6 mb-5 text-secondary pl-1 opacity-70'>WELCOME TO BRIGHTHAT</span>
                <h1 style={{ lineHeight: "4.5rem", fontSize: "4.3rem" }}>Borderless,
                    <br />
                    <span className='text-primary'>outcome-focused</span>
                    <br />
                    tutoring at its best
                </h1>
                <p className='mt-4 text-sm pl-2'>Engage. Enhance. Extend.</p>

                <Button title='Get Started' type='button' classNames='mt-6 bg-primary text-white' />
            </div>
            <div className='w-full mt-6'>
                <Image
                    src={heroImage}
                    width={1000}
                    height={1000}
                    alt='hero image'
                    className='w-full'
                />
            </div>
        </Grid>
    )
}

export default Landing