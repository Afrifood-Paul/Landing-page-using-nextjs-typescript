import Paragraph from '@/components/shared/Paragraph'
import Title from '@/components/shared/Title'
import React from 'react'
import ProductSlides from './ProductSlides'

const Products = () => {
    return (
        <section className='bg-white pt-10 pb-10 px-3'>
            <Title color='dark'>
                <span className='font-bold '>Our Products</span>
            </Title>
            <Paragraph classNames='leading-7 mt-4 w-[45rem] mx-auto'>
                Everyday, we take a step towards achieving our vision by helping people fulfill their learning needs from anywhere at anytime. Below are some of the ways by which we make that happen.
            </Paragraph>
            <div className='px-16'>
                <ProductSlides />

            </div>

        </section>
    )
}

export default Products