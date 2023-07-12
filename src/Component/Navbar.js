import { NavLink } from "react-router-dom"
import './Navbar.css';
const Navbar=()=>{
    return(
        <>
        <NavLink to=' '>HOME</NavLink>&ensp;
        {/* <NavLink to='/home'>HOME</NavLink>&ensp; */}
        <NavLink to='/about'>ABOUT</NavLink>&ensp;
        <NavLink to='/contact'>CONTACT</NavLink>&ensp;
        <NavLink to='/product'>PRODUCT</NavLink>&ensp;
        <NavLink to='/help' >HELP</NavLink>&ensp;
        <NavLink to='/mobile'>MOBILE</NavLink>&ensp;
        <NavLink to='/user'>USER</NavLink>&ensp;
        </>
    )
}
export default Navbar;