import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>
    <header class="nav">

<div class="navbar containerNav">
    <Link to={'/'}>

    <div class="navbar__left">
        <img class="navbar__left--logo" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-2@2x.svg" alt="navbar__left--logo" />
        <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/nft-marketplace-1@2x.svg" className='navbar__left--logo"' alt="" />
    </div>
    </Link>
    

    <div class="navbar__right">
        <ul class="navbar__right__content">
            <li class="navbar__right__content__item">
                <Link to={'/'}>
                <a href="#">Marketplace</a>
                </Link>
                
            </li>
            <li class="navbar__right__content__item">
                
                <Link to={'/rankings'}><a href="#">Rankings</a></Link>
            </li>
            <li class="navbar__right__content__item">
                <Link to={'/Artist'}>

                <a href="#">Artist</a>
                </Link>
               
            </li>
        </ul>

        <button class="differentBtn">
            <img src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/user@2x.svg" alt="" /> Sign up
        </button>
    </div>


</div>
</header>
    </>
  )
}

export default Navbar