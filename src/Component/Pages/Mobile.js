import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'


const Mobile = () => {
  const navigate=useNavigate()
  return (
    <div>
        <h2>Mobile brand is here</h2>
       <button onClick={()=>navigate('mobile1')}>Mobile1</button>&ensp;
        <button onClick={()=>navigate('mobile2')}>Mobile2</button>&ensp;
        <button onClick={()=>navigate('mobile3')}>Mobile3</button>&ensp;
        <Outlet/>
    </div>
  )
}

export default Mobile