import React, { useRef, useEffect, Fragment, useState } from 'react';
import './travelre.css'





       
const Travelre = () => {
    const [image,setImage]=useState('')
    const [url,setUrl]=useState('')
    const [email,setEmail]=useState('')
    const [amount,setAmount]=useState('')

    console.log(email)
    const addinpdata=async (e)=>{

        e.preventDefault();
        console.log("Hello")
        const formdata=new FormData();
        formdata.append('file',image)
        formdata.append("upload_preset","j7hjcv76")
        formdata.append("cloud_name","dsojdaybz")
    
        const res1=await fetch('https://api.cloudinary.com/v1_1/dsojdaybz/image/upload',{
          method:"post",
          body:formdata
        })
        
        const ImgData=await res1.json()
        const url1=ImgData.url
        setUrl(url1);
    
        console.log("iMAGE uRL!!!!!!!!!!! "+ImgData.url)

        const res=await fetch("http://localhost:4000/api/travel/refund",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({
                email,
                amount,
                url:url1
            })
        })

        console.log(res)
    
    }

    
const handleImageInput=(e)=>{
    console.log(e.target.files)
    setImage(e.target.files[0]);
}
const imageUrl="";


    
  return (
    <>
       <div className='travel-body'>
       <div className='travel-container' id='main'>
            <div className='travelform'>
                <form className='travel-form' action="#"  >
                    <h1 className='travel-h1'>Travel Reimbursement</h1>
                    <input 
                        className='travel-input'
                        type="text" 
                        name='amount' 
                        placeholder='Enter Amount' 
                        onChange={(e)=>setAmount(e.target.value)}
                        required 
                        />
                    <input
                        className='travel-input' 
                        type="email" 
                        name='email' 
                        placeholder='Email' 
                        onChange={(e)=>setEmail(e.target.value)}
                        required 
                        />
                    <input
                        className='travel-input' 
                        type='file'
                        id='file-input'
                        name='imageStyle' 
                        onChange={handleImageInput}
                        placeholder='imageStyle' 
                        required 
                        />
                    <button className='travel-button' type='submit' onClick={addinpdata}>Submit</button>
                </form>
            </div>
        </div>
       </div> 
        
    </>
  )
}

export default Travelre