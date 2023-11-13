import Card from '@/components/shared/Card'
import LinkButton from '@/components/shared/LinkButton'
import Paragraph from '@/components/shared/Paragraph'
import Flex from '@/components/styles/Flex'
import { PropductTypes } from '@/scripts/products'
import Image from 'next/image'
import React from 'react'


type ProductCardProps = {
    product: PropductTypes
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <Card>
            <Flex css={{
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                gap: "20px",
                paddingBottom: "20px"
            }}>
                <Image
                    src={product.image}
                    width={300}
                    height={300}
                    alt={product.name}
                    className='w-full'
                />
                <div className='px-2 py-1'>
                    <h2 className='text-xl font-bold py-4'>{product.name}</h2>
                    <Paragraph classNames='text-left tex-[16px] leading-6'>
                        {product.description}
                    </Paragraph>
                    <LinkButton
                        url={product.name} >
                        Read More
                    </LinkButton>
                </div>
            </Flex>
        </Card>
    )
}

export default ProductCard