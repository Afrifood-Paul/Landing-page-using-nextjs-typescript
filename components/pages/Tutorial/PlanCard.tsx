import Button from '@/components/shared/Button'
import Card from '@/components/shared/Card'
import Paragraph from '@/components/shared/Paragraph'
import Flex from '@/components/styles/Flex'
import { PlansType } from '@/scripts/plans'
import React from 'react'

type PlanProps = {
    plan: PlansType,
    index: number
}

const backgroundStyles = [
    "plancard1", "plancard2", "plancard3"
]
const PlanCard = ({ plan, index }: PlanProps) => {
    return (
        <Card classNames={`${index % 2 === 0 ? "h-[25rem]" : "h-[27rem]"} drop-shadow-md  rounded-md pb-4 w-80`}>
            <Flex classNames='w-full h-full' css={{
                flexDirection: "column",
                alignItems: "center",
            }}>
                <article className="w-full">
                    <div className={`bg-blue px-3 py-4 text-white text-center ${backgroundStyles[index]} plancard drop-shadow-md`}>
                        <h3 className="text-3xl capitalize">{plan.type}</h3>
                        <Paragraph classNames='font-normal '>
                            <span className="text-xl">$</span>
                            <span className="text-2xl ">{plan.price}</span>
                        </Paragraph>
                    </div>

                    <div className='text-left mt-5 px-3 py-2'>
                        {plan.benefits.map((benefit, index) => (
                            <li key={index + 1} className="mt-2 text-md ">{benefit}</li>
                        ))}
                    </div>
                </article>

                <Button type='button' title=' Select Plan' classNames={`mt-5 ${index === 1 && "bg-primary"} block`} />
            </Flex>


        </Card>
    )
}

export default PlanCard