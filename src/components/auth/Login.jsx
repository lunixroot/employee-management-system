import React, { useState } from 'react'

const Login = ({handelLogin}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handelLogin(email, password)
    }

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='border-2 rounded-2xl border-blue-400 py-28 px-14'>
            <form onSubmit={(e)=>{
                handleSubmit(e)
            }} className='flex gap-2 flex-col items-center justify-center'>
                <input onChange={(e)=>{
                    setemail(e.target.value)}} value={email} required className='bg-transparent outline-none py-2 px-4 rounded-3xl border-2 border-blue-400 text-xl' type="email" placeholder='Enter your email' />
                <input onChange={(e)=>{
                    setpassword(e.target.value)}} value={password} required className=' bg-transparent outline-none py-2 px-4 rounded-3xl border-2 border-blue-400 text-xl mt-2' type='password' placeholder='Enter your password' />
                <button className='bg-gray-700 mt-4 py-3 px-20 rounded-3xl hover:bg-sky-700'>Log-in</button>
            </form>
        </div>
    </div>
  )
}

export default Login