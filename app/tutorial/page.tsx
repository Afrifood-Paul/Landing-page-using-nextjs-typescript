import LearningPlans from '@/components/pages/Tutorial/LearningPlans'
import Services from '@/components/pages/Tutorial/Services'
import ToutorialLanding from '@/components/pages/Tutorial/ToutorialLanding'
import TutoringForm from '@/components/pages/Tutorial/TutoringForm'
import React, { Fragment } from 'react'

const TutorialPage = () => {
    return (
        <Fragment>
            <ToutorialLanding />
            <Services />
            <TutoringForm />
            <LearningPlans />
        </Fragment>
    )
}

export default TutorialPage