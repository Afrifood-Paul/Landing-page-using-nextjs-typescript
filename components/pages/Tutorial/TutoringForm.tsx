import Button from '@/components/shared/Button'
import Flex from '@/components/styles/Flex'
import Grid from '@/components/styles/Grid'
import React from 'react'
import { FcNext, FcPrevious } from "react-icons/fc"
import formImage from "@/assets/images/tutorials/formImage.png"
import Image from 'next/image'

const TutoringForm = () => {
    return (
        <section className='w-full mx-auto py-3 px-8 mt-5'>
            <Grid>
                <div className='w-[400px]'>
                    <div className="my-3">
                        <h1 className="text-blue font-semibold text-xl">1-on-1 Tutoring Form</h1>
                        <p className='text-sm text-gray-400'>Please fill out the form below</p>
                    </div>
                    <div className="bg-lightBlue p-3 rounded-md drop-shadow-md">
                        <h1 className="font-semibold my-4 text-dark">Who need the tutor</h1>
                        <form className='w-full'>
                            <div className="form-group bg-gray-300 rounded-md">
                                <span className="border-2 border-blue rounded-md py-1 px-2 text-md">A</span>
                                <input type="text" readOnly value="Myself" className="w-full bg-inherit inline-block" />
                            </div>
                            <div className="form-group bg-gray-300 rounded-md">
                                <span className="border-2 border-blue rounded-md py-1 px-2 text-md">B</span>
                                <input type="text" readOnly value="My Child" className="w-full bg-inherit inline-block" />
                            </div>
                            <div className="form-group bg-gray-300 rounded-md">
                                <span className="border-2 border-blue rounded-md py-1 px-2 text-md">C</span>
                                <input type="text" readOnly value="Someone else" className="w-full bg-inherit inline-block" />
                            </div>
                            <Flex classNames='mt-5'>

                                <Button type='button' title='Next' classNames='text-white bg-primary' />

                                <div className="progress">
                                    <button> <FcPrevious /></button>
                                    <div className='progress-width'></div>
                                    <button> <FcNext /></button>
                                </div>
                            </Flex>
                        </form>
                    </div>
                </div>


                {/* grid two */}
                <div className="max-w-full">
                    <Image src={formImage} width={300} height={100} alt="form image" className="w-full" />
                </div>

            </Grid>
        </section>
    )
}

export default TutoringForm