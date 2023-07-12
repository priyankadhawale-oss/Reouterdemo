import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { Product } from "./Pages/Product"
import Help from "./Pages/Help"
import Error from "./Pages/Error"
import Navbar from "./Navbar"
import { Product1 } from "./Pages/Product1"
import Product2 from "./Pages/Product2"
import Product3 from "./Pages/Product3"
import Mobile from "./Pages/Mobile"
import Mobile1 from "./Pages/Mobile1"
import Mobile2 from "./Pages/Mobile2"
import Mobile3 from "./Pages/Mobile3"
import User from "./Pages/User"
import UserDetails from "./Pages/UserDetails"
const Myapp=()=>{
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}/>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/product" element={<Product/>}>
                <Route path='/product/product1' element={<Product1/>}/>
                <Route path='/product/product2' element={<Product2/>}/>
                <Route path='/product/product3' element={<Product3/>}/>
            </Route>
            <Route path='/help' element={<Help/>}></Route>
            <Route path='/mobile' element={<Mobile/>}>
                <Route path='/mobile/mobile1' element={<Mobile1/>}/>
                <Route path='/mobile/mobile2' element={<Mobile2/>}/>
                <Route path='/mobile/mobile3' element={<Mobile3/>}/>
            </Route>
            <Route path='/user' element={<User/>}>
                <Route path="/user/:name" element={<UserDetails/>}/>
            </Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
        </>
    )
}
export default Myapp;