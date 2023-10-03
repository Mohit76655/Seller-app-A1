import React, {useState} from 'react'
import Products from '../products.json'
import 'remixicon/fonts/remixicon.css'

const Nav = () => {
  const [searchTerm, setsearchTerm] = useState("")
  return (
    <>
    <div className=" w-auto p-5 rounded-2xl ml-3 mr-3 flex gap-2 shadow-lg mt-4">
        <input type="text" className='rounded-2xl w-72 mr-10 p-1 px-2 font-semibold bg-white shadow-md focus-visible:ring' placeholder='Search...' onChange={(event) =>{
          setsearchTerm(event.target.value)
        }}/>
        <a href="">Relevance <i class="ri-arrow-down-s-line"></i></a>
        <a href="">All Brands <i class="ri-arrow-down-s-line"></i></a>
    </div>
    <div className="container mx-auto py-20 px-1">
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-6">
      {
        Products.filter((val) => {
          if (searchTerm == "") {
            return val;
          }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val;
          }
        })
        .slice(0,6).map((card) =>{
          return(
            <div className="" key={card.id}>
              <div className='bg-slate-100 rounded-lg shadow-xl m-4 w-80 p-3'>
                <img src={card.image} alt={card.title} className='rounded-lg w-full' />
                <div className="product_info mt-2 flex justify-between"> 
                <div className="card flex flex-wrap gap-4">
                <h5 className='text-lg font-semibold'>{card.title}</h5>
                <span className='mt-1 ml-28 outline-dotted rounded-lg p-1 text-xs outline-cyan-600'>{card.year}</span>
                <div className="left flex flex-col">
                  <span className='mt-1 text-slate-500'><i class="ri-group-line text-sky-600 mr-2"></i>{card.people}</span>
                  <span className='mt-1 text-slate-500'><i class="ri-dashboard-3-line text-sky-600 mr-2"></i>{card.avg}</span>
                
                </div>
                <div className="right flex flex-col place-items-end ml-10">
                < span className='mt-1 text-slate-500'><i class="fa-solid fa-gas-pump mr-2 text-sky-600"></i>{card.fule}</span>
                <span className='mt-1 text-slate-500'><i class="ri-steering-2-fill mr-1 text-sky-600"></i>{card.type}</span>
                </div>
                <div className='mt-5 border-t-2 w-72 p-5 flex justify-between'><h4 className=" text-xl font-semibold">{card.price}</h4>
                <i class="ri-heart-3-line text-sky-600 bg-slate-200 p-1 px-2 rounded-lg"></i>
                <button className=' text-white bg-sky-500 hover:bg-sky-700 p-2 rounded-lg text-xs font-medium'>Learn More</button></div>
              </div>
      </div>
      </div>
            </div>
          )
        })
      }
      </div>
    </div>
    </>
  )
}

export default Nav
