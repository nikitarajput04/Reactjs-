import React from 'react'

function todos() {
  return (
    <div className='flex w-full bg-blue-900  rounded-xl'>
        <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-xl px-3 outline-none duration-150 bg-white/20 py-1.5 text-white "
              
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-pink-600  text-white shrink-0 ">
              Add
          </button>
    </div>
  )
}

export default todos