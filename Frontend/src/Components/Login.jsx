import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "50%"
    },
};
const Login = () => {
    const [modalIsOpen, setIsOpen] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    let postData = JSON.stringify({ email, password })
    let auth = localStorage.getItem("user");

    useEffect(() => {
        if (auth) {
            navigate("/")
        }
        
    })

    const handleLogin = async (e) => {
        e.preventDefault()
        let result = await axios.post("https://iqbal-library.vercel.app/login", postData, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (result.data.name) {
            localStorage.setItem("user", JSON.stringify(result));
            toast.success("Login Succesfully!", {
                autoClose: 1000
            })
            setTimeout(() => {
                navigate("/")
            }, [1000])
        } else {
            toast.error(result.data)
        }

        console.log(result);
    }
    function closeModal() {
        setIsOpen(false);
        navigate("/")
    }
    return (
        <>
            <div className='w-full h-[58rem] bg-green-400'>
                <p className='absolute top-4 right-5 z-[1000] w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer' onClick={closeModal}><IoCloseSharp className='text-2xl font-bold' /></p>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                overlayClassName="Overlay2 "
            >
                <h1 className='pt-5 pb-3 text-4xl font-bold font-serif text-center'>Login Now</h1>
                <p className='text-center  text-gray-500'>Please fill in this form to login.</p>
                <form className='flex items-center flex-col space-y-5 py-5'>
                    <input type='email' value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} placeholder='Enter Your Email' className='border-2 border-black rounded py-1 px-4 w-[60%] focus:outline-none bg-gray-200' />
                    <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Your Password' className='border-2 border-black rounded py-1 px-4 w-[60%] focus:outline-none bg-gray-200' />
                    <button className='bg-blue-600 text-white font-semibold py-2 px-4 rounded w-40 hover:bg-purple-700' onClick={handleLogin}>Login</button>
                    <h1 className="flex items-center space-x-1 text-red-700 font-semibold">
                        <p>Creat an account?</p>
                        <Link to="/signup" className='underline '>signup</Link>
                    </h1>

                </form>
            </Modal>
            <ToastContainer position='top-center' />
        </>
    )
}

export default Login
