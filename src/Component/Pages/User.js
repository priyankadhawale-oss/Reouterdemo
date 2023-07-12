import React from 'react'
import {NavLink, Outlet} from "react-router-dom"
const User = () => {
  return (
    <div>
      <NavLink to="priyanka">Priyanka</NavLink>&ensp;
      <NavLink to ="shailesh">Shailesh</NavLink>&ensp;
      <NavLink to="lokhande">Lokhande</NavLink>&ensp;
      <Outlet/>
    </div>
  )
}

export default User