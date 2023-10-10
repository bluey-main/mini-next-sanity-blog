import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='max-w-4xl mx-auto bg-slate-600 px-4 sm:px-6 lg:px-8'>
        <Link href="/">
            <h1 className='text-3xl font-medium text-white'>Mini<span>Blog</span></h1>
        </Link>
       
    </div>
  )
}

export default Navbar