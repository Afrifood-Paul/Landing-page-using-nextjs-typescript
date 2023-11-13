import Landing from '@/components/pages/Home/Landing'
import Products from '@/components/pages/Home/Products'
import Reviews from '@/components/pages/Home/Reviews'
import SectionTwo from '@/components/pages/Home/SectionTwo'
import Tutors from '@/components/pages/Home/Tutors'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Landing />
      <SectionTwo />
      <Products />
      <Reviews />
      <Tutors />
    </Fragment>
  )
}
