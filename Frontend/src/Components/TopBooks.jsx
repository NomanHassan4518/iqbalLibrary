import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from './Spinner';

const TopBooks = () => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let auth = localStorage.getItem("user")

  const fetchData = async () => {


    try {
      let response = await fetch("http://localhost:5000/topbooks");
      let jsonData = await response.json();
      setData(jsonData.data)
    }

    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  // console.log(data);
  return (
    <>
      {
        loading ?
          <Spinner />
          :
          <div className='border border-black rounded-md mt-12 p-5'>
            <div className='flex items-center justify-between'>
              <h1 className='text-4xl font-bold font-serif'>Top Books</h1>
              <Link to="/allbooks" className='text-lg font-serif hover:text-blue-600 '>See all books</Link>
            </div>

            <div className='grid grid-cols-2 gap-5 my-7'>
              {
                data.map((item, index) => (
                  <div key={index} className='bg-gray-50 shadow border hover:-translate-y-2 duration-500 cursor-pointer rounded grid  p-3 grid-cols-12 '>

                    <div className='col-span-4 h-[216px]'>
                      <img className='w-full h-full object-contain !p-0' src={item.imgURL} alt="" />
                    </div>

                    <div className='px-4 mt-3 space-y-3 col-span-8'>
                      <h1 className='font-bold text-2xl'>{item.title.slice(0, 20)}...</h1>
                      <p className='text-lg text-gray-500'>{item.desc.slice(0, 80)}.......</p>

                      {
                        auth ?
                          <button > <Link className='w-[14rem] block border px-4 py-2 text-white font-semibold  bg-blue-500 hover:bg-purple-700  !mt-4 rounded-md' to={ `http://localhost:5000/files/${item.pdfBook}`} target='_blank' >Read Online</Link>
                          </button>
                          :
                          <button > <Link className='w-[14rem] block border px-4 py-2 text-white font-semibold  bg-blue-500 hover:bg-purple-700  !mt-4 rounded-md' to="/login" >Read Online</Link>
                          </button>
                      }

                     
                    </div>

                  </div>
                ))
              }
            </div>

          </div>
      }
    </>
  )
}

export default TopBooks
