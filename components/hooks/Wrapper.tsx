import React, { ReactNode } from 'react'
type WrapperProps = {
    children: ReactNode
}
const Wrapper = ({ children }: WrapperProps) => {
    return (
        <main className='mt-[7rem] px-4 py-3'>
            {children}
        </main>
    )
}

export default Wrapper