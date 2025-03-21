import React from 'react'

const Header = (props) => {
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl'>Hello, <br /> <span className='text-3xl'>{props.data.name} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 py-1 px-3 rounded-xl'>Log Out</button>
    </div>
  )
}

export default Header