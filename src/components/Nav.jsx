import React from 'react'

const Nav = () => {
  return (
    <>
    <div className=" w-auto p-5 rounded-2xl ml-3 mr-3 flex gap-2 shadow-lg mt-4">
        <input type="text" className='rounded-2xl w-72 mr-10 p-1 px-2 font-semibold bg-white shadow-md focus-visible:ring' placeholder='Search...'/>
        <a href="">Relevance <i class="ri-arrow-down-s-line"></i></a>
        <a href="">All Brands <i class="ri-arrow-down-s-line"></i></a>
    </div>
    </>
  )
}

export default Nav
