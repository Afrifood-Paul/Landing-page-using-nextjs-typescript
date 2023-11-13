import React from 'react'
import PlanCard from './PlanCard'
import Flex from '@/components/styles/Flex'
import { plans } from '@/scripts/plans'
import Title from '@/components/shared/Title'
import Paragraph from '@/components/shared/Paragraph'

const LearningPlans = () => {
    return (
        <section className="mt-5 py-10 bg-lightBlue">
            <Title color="dark"><span className="font-semibold mb-4">Learning Plans</span></Title>
            <Paragraph classNames="text-center w-96 my-5 mx-auto">
                Our monthly 1-to-1 tutoring plans are designed to meet the needs of our learners.
            </Paragraph>
            <Flex css={{
                justifyContent: "center",
                alignItems: "center",
                gap: "2px"
            }}>

                {plans.map((plan, index) => (
                    <PlanCard plan={plan} key={plan.id} index={index} />
                ))}
            </Flex>
        </section>
    )
}

export default LearningPlans