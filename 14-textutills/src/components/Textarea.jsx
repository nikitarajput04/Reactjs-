import React, { useState } from 'react'

function Textarea() {
const handleUpclick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
    
}
const handlelwclick=()=>{
    let newtext2=text.toLowerCase();
    setText(newtext2)
    
}

const handleClrclick=()=>{
    let newtext2=('');
    setText(newtext2)
    
}
const handleOnChange=()=>{
setText(event.target.value)
}
const [text,setText]=useState('')
  return (
    <>
    <div className='container '>
        <h1 className="text-3xl font-bold  mx-12">ENTER TEXT BELOW </h1>
       <textarea
  className="border-2 border-gray-400 rounded-lg p-3 mx-12  my-3 not-visited:w-full h-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 flex justify-between "
  placeholder=" " value={text} onChange={handleOnChange}
></textarea>
<button
    className="mt-3 cursor-pointer bg-purple-500 text-white px-3 py-2 mx-0.5 rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
   onClick={handleUpclick}>
    CONVERT INTO UPERCASE
  </button>
  <button
    className="mt-3 cursor-pointer bg-purple-500 text-white py-2  px-3 mx-0.5 rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
   onClick={handlelwclick}>
       CONVERT INTO LOWERCASE
  </button> 
  <button
    className="mt-3 cursor-pointer bg-purple-500 text-white py-2  px-3 mx-0.5 rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
   onClick={handleClrclick }>
       CLEAR TEXT
  </button> 
  
  
  
  <div className="container  mx-12 my-4 py-3 font-semibold">
    <h1> your text summarry</h1>
<p>
  {text.trim().length > 0 ? text.trim().split(/\s+/).length : 0} words & {text.replace(/\s/g, "").length} characters
</p>
<p>{0.008*text.split(" ").length } Minutes read</p>
<h2 className='mx-8 my-5'>PREVIEW</h2>
<p>{text}</p>
  </div>
    </div>
    </>
  )
}

export default Textarea