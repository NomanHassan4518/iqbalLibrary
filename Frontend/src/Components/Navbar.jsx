import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

    let auth = localStorage.getItem("user")
    let navigate = useNavigate();

  

    const handleLogout =()=>{
        localStorage.clear();
        navigate("/login")
    }
    return (
        <>
            <div className="">
                <div className=' border-b-2 border-red-600 shadow-lg fixed z-50 w-full bg-white'>
                    <div className='px-12 py-3  flex items-center justify-between '>
                        <div className='flex items-center space-x-10 '>
                            <Link to="/">
                                <img src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...GAqx5PkB7OwXs1M3EMoAJtlyAkhPtu8...Q+" alt="" className='w-[158px] h-[67px] object-cover' />
                            </Link>

                            <Link to="/" className='text-xl font-semibold'>Home</Link>
                            {/* <Link to="/" className='text-xl font-semibold'>All Books</Link> */}
                            <Link to="/addbook" className='text-xl font-semibold'>AddBook</Link>
                            <Link to="/" className='text-xl font-semibold'>News</Link>
                            <Link to="/faq" className='text-xl font-semibold'>FAQ</Link>
                        </div>

                        <div className=''>
                            <input type="search" className='  focus:outline-none border border-black py-1 px-5 w-80 rounded-lg' placeholder='Search a book' />
                        </div>

                        <div className='flex items-center space-x-6'>
                            {
                                auth ?
                                    <Link to="/login" className='text-xl font-semibold' onClick={handleLogout}>Logout</Link>
                                    :
                                    <div className='flex items-center space-x-6'>
                                        <Link to="/login" className='text-xl font-semibold'>Login</Link>
                                        <Link to="/signup" className='text-xl font-semibold'>SignUp</Link>
                                    </div>
                            }


                            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-black  focus:outline-none focus:ring-0 dark:bg-none  dark:focus:ring-0" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20" className="md:w-4 xl:w-5 md:h-4 xl:h-5"><path d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z" transform="translate(-2 -2)" fill="currentColor" fillRule="evenodd"></path></svg>
                                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-[0.1rem] -right-[0.2rem] dark:border-gray-900" >0</div>
                            </button>
                        </div>

                    </div>
                </div>

                

            </div>

        </>
    )
}

export default Navbar
