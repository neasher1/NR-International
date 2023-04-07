import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../Images/logo.png";

const menuItems = <>
    <li><Link className='font-barlow' to="/">Home</Link></li>
    <li><Link className='font-barlow' to="/shop">Products</Link></li>
</>

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact text-xl dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo} width="80" height="40" alt="logo" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;