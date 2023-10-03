import React from 'react'

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pages.push(i);
  }

  return (
    <div className='w-auto p-5 rounded-2xl ml-3 mr-3 flex gap-2 shadow-2xl justify-end mb-3'>
      <i class="ri-arrow-left-s-line flex place-items-center w-10 h-10 font-semibold text-sm m-[0 10px] rounded-lg cursor-pointer border-2 border-sky-500 mr-5 active:bg-sky-500 active:text-sky-50 text-center p-2 mt-1"></i>
        
        <div className='pagination flex flex-wrap justify-center mt-1'>
            {pages.map((page, index) => {
                return (
                  <>
                      <button
                          key={index}
                          onClick={() => setCurrentPage(page)}
                          className="w-10 h-10 font-semibold text-sm m-[0 10px] rounded-lg cursor-pointer border-2 border-sky-500 mr-5 active:bg-sky-500 active:text-sky-50">
                          {page}
                          
                      </button>
                    </>
                );
            })}
        </div>
        <i class="ri-arrow-right-s-line flex place-items-center w-10 h-10 font-semibold text-sm m-[0 10px] rounded-lg cursor-pointer border-2 border-sky-500 mr-5 active:bg-sky-500 active:text-sky-50 text-center p-2 mt-1"></i>
      </div>
  );
};

export default Pagination
//  {page == currentPage ? "active" : ""}