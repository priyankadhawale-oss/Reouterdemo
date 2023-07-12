import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Product = () => {
  return (
    <div>
        <h2>Product page is here..</h2>
        <NavLink to="product1">Product1</NavLink>&ensp;
        <NavLink to='product2'>Product2</NavLink>&ensp;
        <NavLink to='product3'>Product3</NavLink>&ensp;
        <Outlet/>
    </div>
  )
}
