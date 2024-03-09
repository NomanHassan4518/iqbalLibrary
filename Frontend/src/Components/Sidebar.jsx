import React, {  useState } from 'react'
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const Sidebar = () => {
    const [quranList, setQuranList] = useState(true)
    const [hadithList, setHadithList] = useState(false)
    const [hajjList, setHajjList] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // let auth = localStorage.getItem("user")
    let navigate = useNavigate();
    let postData = JSON.stringify({ email, password })
    
   

    const handleLogin = async () => {
        let result = await axios.post("https://iqbal-library.vercel.app/login", postData, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (result.data.name) {
            toast.success("Login successfully!", {
                autoClose: 1000
            });
            localStorage.setItem("user", JSON.stringify(result));
            setTimeout(() => {
                navigate("/")
            }, [1000])

            setEmail("");
            setPassword("")
        }

        else {
            toast.error("User Not Found!")
        }
        console.log(result);

    }


    const handleQuranList = () => {
        if (quranList === true) {
            setQuranList(false)
        } else {
            setQuranList(true)
        }
    }

    const handleHadithList = () => {
        if (hadithList === true) {
            setHadithList(false)
        } else {
            setHadithList(true)
        }
    }

    const handleHajjList = () => {
        if (hajjList === true) {
            setHajjList(false)
        } else {
            setHajjList(true)
        }
    }


    return (
        <>
           
                <div className="border-r-2 border-b-2 border-red-600 shadow w-52 pt-10 bg-white">
                    <div className='pb-6 border-b-2 border-green-600 px-3 space-y-7'>
                        <h1 className='text-2xl font-bold flex items-center space-x-3 '>
                            <span><BiSolidCategoryAlt /></span>
                            <span>Categories</span></h1>

                        <div className="my-4 pl-3">
                            <h1 to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer' onClick={handleQuranList}>
                                <span className='uppercase'>Quran kareem</span>
                                <span>
                                    {
                                        quranList ? <BiSolidUpArrow /> : <BiSolidDownArrow />
                                    }
                                </span>

                            </h1>
                            <div className={`${quranList ? 'flex items-start flex-col space-y-2 mt-3 px-3 ' : 'hidden'}`}>
                                <Link to="/tafseer" className="hover:text-blue-600">Quran Tafseer</Link>
                                <Link to="" className="hover:text-blue-600">Quran Translation</Link>
                                <Link to="" className="hover:text-blue-600">Books About Quran</Link>
                            </div>
                        </div>

                        <div className="my-4 pl-3">
                            <h1 to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer' onClick={handleHadithList}>
                                <span className='uppercase'>Hadith Books</span>
                                <span>
                                    {
                                        hadithList ? <BiSolidUpArrow /> : <BiSolidDownArrow />
                                    }
                                </span>

                            </h1>
                            <div className={`${hadithList ? 'flex items-start flex-col space-y-2 mt-3 px-3 ' : 'hidden'}`}>
                                <Link to="" className="hover:text-blue-600">Sahih Bukhari</Link>
                                <Link to="" className="hover:text-blue-600">Sahih Muslim</Link>
                                <Link to="" className="hover:text-blue-600">Jami at Tirmidhi</Link>
                                <Link to="" className="hover:text-blue-600">Sunan Abu Dawood</Link>
                                <Link to="" className="hover:text-blue-600">Sunan An Nasai</Link>
                                <Link to="" className="hover:text-blue-600">Sunan Ibn Majah</Link>
                            </div>
                        </div>

                        <div className="my-4 pl-3">
                            <h1 to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer' onClick={handleHajjList}>
                                <span className='uppercase'>hajj & umrah guides</span>
                                <span>
                                    {
                                        hajjList ? <BiSolidUpArrow /> : <BiSolidDownArrow />
                                    }
                                </span>

                            </h1>
                            <div className={`${hajjList ? 'flex items-start flex-col space-y-2 mt-3 px-3 ' : 'hidden'}`}>
                                <Link to="" className="hover:text-blue-600">Hajj Info</Link>
                                <Link to="" className="hover:text-blue-600">Umrah Info</Link>

                            </div>
                        </div>

                        <div className="my-6 pl-3">
                            <Link to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer uppercase'>History Books</Link>
                        </div>

                        <div className="my-6 pl-3">
                            <Link to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer uppercase'>iqbaliyat</Link>
                        </div>

                        <div className="my-6 pl-3">
                            <Link to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer uppercase'>urdu novels</Link>
                        </div>
                    </div>

                    <div className="my-4 px-3">
                        <h1 className='text-2xl font-bold flex d items-center space-x-6 '>
                            <span><FaUserSecret /></span>
                            <span>User</span>
                        </h1>

                        <div className="flex items-start flex-col space-y-7 mb-5">
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='py-0.5 px-4 border border-blue-500 focus:outline-none w-full mt-4 rounded' placeholder='Enter Your Email' />
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className='py-0.5 px-4 border border-blue-500 focus:outline-none w-full rounded' placeholder='Enter Your Email' />
                            <button className=' bg-blue-600 text-white font-semibold px-2 py-1 rounded w-20 hover:bg-purple-700' onClick={handleLogin}>Login</button>
                        </div>

                    </div>
                </div>
           

            <ToastContainer position='top-center' />
        </>
    )
}

export default Sidebar
