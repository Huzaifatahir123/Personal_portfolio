import React from 'react'
import assests from '../assets/assests'

const Footer = () => {
  return (
    <>
    <div className='flex justify-between px-10 py-6 sm:px-14 md:px-16 lg:px-28 bg-primary text-text'>
        <div className='flex gap-2 justify-center items-top'><img className='bg-white p-1 align-top' src={assests.Logo} alt="" />Personal</div>
        <p>@ 2019-2023 Personal</p>

    </div>
    </>
    
  )
}

export default Footer