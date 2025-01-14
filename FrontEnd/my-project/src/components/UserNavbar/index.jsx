import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

function UserNavbar() {
  return (
    <div className='navbar'>
        <div className='logo'><a href="">COLO<span>SHOP</span></a></div>
        <div className='links'>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/productadd">Add Product</Link></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Promotion</a></li>
        </div>
        <div className='search-basket'>
            <FaSearch className='fasearch' />
            <Link to="/basket"><FaShoppingBasket /></Link>
        </div>
    </div>
  )
}

export default UserNavbar