import React from 'react'
import ReactPaginate from 'react-paginate'

const paginate = () => {
  return (
    <div>
      <ReactPaginate
        breakLabel={
            <span className='mr-4'>...</span>
        }
        nextLabel={
            <span className='w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md'>
                <i class="ri-arrow-right-s-line"></i>
            </span>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={10}
        previousLabel={
            <span className='w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md mr-4'>
                <i class="ri-arrow-left-s-line"></i>
            </span>
        }
        containerClassName='flex items-center justify-center mt-8 mb-4'
        pageClassName='block border border-2 border-sky-500 hover:bg-sky-200 w-10 h-10 flex items-center justify-center rounded-md mr-4'
        activeClassName='bg-sky-500 text-white'
      />
    </div>
  )
}

export default paginate
