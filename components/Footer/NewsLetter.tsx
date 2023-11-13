import React from 'react'
import { BsSend } from 'react-icons/bs'

const NewsLetter = () => {
    return (
        <form className='relative w-[30rem] mt-5'>
            <input type="text" name="" id="" className='w-full py-4 px-2 text-sm rounded-[15px]' />
            <button className='button absolute top-0 right-0 bottom-0 flex flex-row space-x-2 bg-primary text-white'>
                <span>Subscibe Now</span>
                <BsSend />
            </button>
        </form>
    )
}

export default NewsLetter