import React, { useState, useEffect } from 'react'
import useFetch from "../../hook/useFetch";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const API = () => {
  const { data, loading, error } = useFetch(`${API_BASE_URL}/api/v1/users`);
  const [views, setViews] = useState(0);

  /* const getUsers = async () => {
    const res = await fetch("http://localhost:5000/api/v1/users")

    const data = await res.json();

   setUsers(data.data.users)
    console.log(data.data.users)
  }

  useEffect(() => {
    getUsers()
  }, [])
 */


  return (
    <div className='bg-white p-16'>


      {data.map((e, i) => (
        <h1 className='font-bold uppercase' key={e._id}>
          {e.firstName}
        </h1>
      ))}

      <button onClick={()=>setViews(e=>e + 1)} className='bg-black p-1 text-white'>Get All Users</button>
      <p className='text-black text-md'>You have requested users from the api <span className='font-bold'>{views} </span>times.</p>
    </div>
  )
}

export default API