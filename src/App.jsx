import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import Employeedashbord from './components/dashbord/Employeedashbord'
import Admindashbord from './components/dashbord/Admindashbord'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import Authcontext, { authContext } from './context/Authcontext'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedUserData, setloggedUserData] = useState(null)
  const authData = useContext(authContext)
  useEffect(() => {
    setLocalStorage()
  },)
useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setloggedUserData(userData.data)
  }
},[])


  // useEffect(() => {
  //   if(authData){
  //     const loggedInUsr = localStorage.getItem('loggedInUser')
  //     if(loggedInUsr){
  //       setUser(loggedInUsr.role)
  //     }
  //   }
  // }, [authData])
  
  const handelLogin = (email, password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(authData) {
      const employee = authData.employees?.find(e => e.email === email && e.password === password)
      if(employee){
        setUser('employee')
        setloggedUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: employee}))
      }
    }
    else{
      alert('Invalid email or password')
    }
  }

  return (
   <>
   {!user ? <Login handelLogin={handelLogin} />: ""}

   {user == 'admin' ? <Admindashbord /> : ''}
   {user == 'employee' ? <Employeedashbord data={loggedUserData} /> : ''}
   </>
  )
}

export default App