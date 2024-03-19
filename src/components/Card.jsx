import React from 'react'
import '../index.css'
export default function Card({data, deleteData, id}) {
  return (
    <>

      <div className='card w-[80%] border-2 border-zinc-600 m-auto text-xl font-semibold p-4 mt-6 flex items-center justify-between'>

        <div>
            <p> Name: {data.name}  </p>
            <p>Job: {data.position}</p>
            <p>Age: {data.age}</p>
        </div>

        <div className="btn  ">
            <button onClick={()=>deleteData(id)} className='bg-red-600 p-2 text-white'>Delete</button>
        </div>

      </div>

      
    </>
  )
}
