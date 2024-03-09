import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    zIndex:"1000"
  },
};


const SignUp = () => {

  const [modalIsOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let auth = localStorage.getItem("user")

  useEffect(() => {
    if (auth) {
      navigate("/")
    }
  })

  function closeModal() {
    setIsOpen(false);
    navigate("/")
  }

  let postData = JSON.stringify({ name, email, password })

  const handleSignup = async (e) => {
    e.preventDefault()
    let result = await axios.post("http://localhost:5000/signup", postData, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (result) {
      toast.success("Signup Successfully!", {
        autoClose: 1000
      });
      localStorage.setItem("user", postData)

      setTimeout(() => {
        navigate("/")
      }, [1000])
    }

    else {
      toast.error("Please try again");
    }
  }


  return (
    <div className='w-full  bg-pink-400 h-[58rem]'>
      <p className='absolute top-4 right-5 z-[1000] w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer' onClick={closeModal}><IoCloseSharp className='text-2xl font-bold' /></p>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay2 "
      >

        <h1 className='pt-5 pb-3 text-4xl font-bold font-serif text-center'>Register Now</h1>
        <p className='text-center  text-gray-500'>Please fill in this form to signup.</p>
        <form className='flex items-center flex-col space-y-5 py-5'>
          <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Your Name' className='border-2 border-black rounded py-1 px-4 w-[60%] focus:outline-none bg-gray-200' />
          <input type='email' value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} placeholder='Enter Your Email' className='border-2 border-black rounded py-1 px-4 w-[60%] focus:outline-none bg-gray-200' />
          <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Your Password' className='border-2 border-black rounded py-1 px-4 w-[60%] focus:outline-none bg-gray-200' />
          <button className='bg-blue-600 text-white font-semibold py-2 px-4 rounded w-40 hover:bg-purple-700' onClick={handleSignup}>Register</button>
          <h1 className="flex items-center space-x-1 text-red-700 font-semibold">
            <p>Already have an account?</p>
            <Link to="/login" className='underline '>login</Link>
          </h1>

        </form>
      </Modal>

      <ToastContainer position='top-center' />
    </div>
  )
}

export default SignUp
