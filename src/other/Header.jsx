import React from 'react'

const Header = ({data}) => {
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl'>Hello, <br /> <span className='text-3xl'>{data.name} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 py-1 px-3 rounded-xl'>Log Out</button>
    </div>
  )
}

export default Header