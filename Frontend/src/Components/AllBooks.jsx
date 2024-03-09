import React from 'react'
// import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const AllBooks = (props) => {
  // const [isSticky, setSticky] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setSticky(window.scrollY > 400)
  //   }

  //   window.addEventListener("scroll", handleScroll)

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])
  let auth = localStorage.getItem("user")

  let books = props.data
  localStorage.setItem("books", JSON.stringify(books))
  let allBooks = localStorage.getItem("books")
  let allbooks = JSON.parse(allBooks)
  return (
    <div className='pt-20  flex  space-x-3'>
    <div>
    <Sidebar/>
    </div>

      <div className=' rounded p-7 !mr-5 border-2 border-green-500 shadow-lg  mt-12'>
        <div className="flex items-center justify-between">
          <h1 className='text-3xl font-bold font-serif'>All Books</h1>
          <p className='text-lg text-gray-400'>{allbooks.length} Books</p>
        </div>

        <div className="grid grid-cols-2 mt-10 gap-5">
          {
            allbooks.map((item, index) => (
              <div key={index} className='bg-gray-50 shadow border cursor-pointer rounded grid  p-3 grid-cols-12 hover:-translate-y-2 duration-500'>
                <div className='col-span-4 h-[216px]'>
                  <img className='w-full h-full object-contain !p-0' src={item.imgURL} alt="" />
                </div>

                <div className='px-4 mt-3 space-y-3 col-span-8'>
                  <h1 className='font-bold text-2xl'>{item.title.slice(0, 20)}</h1>
                  <p className='text-lg text-gray-500'>{item.desc.slice(0, 90)}.......</p>

                  {
                    auth ?
                      <button > <Link className='w-[14rem] block border px-4 py-2 text-white font-semibold  bg-blue-500 hover:bg-purple-700 hover:translate-x-2 duration-500 !mt-4 rounded-md' to={`http://localhost:5000/files/${item.pdfBook}`} target='_blank' >Read Online</Link>
                      </button>
                      :
                      <button > <Link className='w-[14rem] block border px-4 py-2 text-white font-semibold  bg-blue-500 hover:bg-purple-700 hover:translate-x-2 duration-500 !mt-4 rounded-md' to="/login" >Read Online</Link>
                      </button>
                  }


                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AllBooks
