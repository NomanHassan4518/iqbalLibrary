import axios from 'axios';
import React, { useState } from 'react'

const AddBook = () => {
    const [title , setTitle] = useState("");
    const [desc , setDesc] = useState("");
    const [stock , SetStock] = useState("");
    const [price , setPrice] = useState("");
    const [category , setCategory] = useState("");
    const [imgURL , setImgURL] = useState("");
    const [pdfBook , setpdfBook] = useState(null);

    const handleFileChange =(e)=>{
        setpdfBook(e.target.files[0])
    }

    const formData = new FormData();
    formData.append("title", title)
    formData.append("desc", desc)
    formData.append("stock", stock)
    formData.append("price", price)
    formData.append("category", category)
    formData.append("imgURL", imgURL)
    formData.append("pdfBook", pdfBook)

    const handleSumbit = async (e)=>{
        e.preventDefault();

        let result =await axios.post("https://iqbal-library.vercel.app/uploadbook" , formData , {
            headers:{
                "Content-Type":"multipart/form-data"
              }
        })

        console.log("res" , result);

        console.log(formData);
    }

    return (
        <div className=' py-12 flex items-center justify-center pt-40 bg-purple-700'>
            <div className='border border-lime-200 rounded px-4 py-5 w-[70%] '>
                <h1 className='text-5xl font-bold font-serif text-center my-4 text-white'>Add Your Book</h1>

                <form onSubmit={handleSumbit} className='w-[100%] flex items-center justify-center flex-col'>
                    <input type="text" placeholder='Enter Your Book Name' className='border-2 border-black px-5 py-2 rounded w-[70%] mt-5 focus:outline-none' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>

                    <input type="text" placeholder='Enter Your Book Description' className='border-2 border-black px-5 py-2 rounded w-[70%] mt-5 focus:outline-none' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>

                    <input type="number" placeholder='Enter Your Book Stock' className='border-2 border-black px-5 py-2 rounded w-[70%] mt-5 focus:outline-none' value={stock} onChange={(e)=>{SetStock(e.target.value)}}/>

                    <input type="text" placeholder='Enter Your Book Price' className='border-2 border-black px-5 py-2 rounded w-[70%] mt-5 focus:outline-none' value={price} onChange={(e)=>{setPrice(e.target.value)}}/>

                    <input type="text" placeholder='Enter Your Book Category' className='border-2 border-black px-5 py-2 rounded w-[70%] mt-5 focus:outline-none' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>

                    <input type="text" placeholder='Enter Your Book IMG' className='border-2 border-black px-5 py-2 rounded w-[70%] mt-5 focus:outline-none' value={imgURL} onChange={(e)=>{setImgURL(e.target.value)}}/>

                    <input type="file" placeholder='Enter Your Book Name' className='border-2 border-black px-5 py-2 rounded w-[70%] mt-5 focus:outline-none bg-white' 
                    name="pdfBook" onChange={handleFileChange} accept="application/pdf"/>

                    <button type='submit' className='mt-7 px-4 py-2 text-xl font-semibold text-center bg-black text-white w-96 rounded'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default AddBook
