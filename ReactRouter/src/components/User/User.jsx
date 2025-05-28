import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div className='text-white text-center text-2xl bg-gray-600 p-4 rounded-xl'>User:{userid}</div>
  )
}

export default User