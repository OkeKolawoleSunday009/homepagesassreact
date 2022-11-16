import React from 'react'
import '../scss/section/header.scss';
import home from '../Component/images/home.png';
import logoname from '../Component/images/logoname.png';



export default function Header() {
  return (
    <div className="">

        <div className='header'>
            <div className='logo'>
               <img id="logo_image" src={home}/>
                <img id="logo_name" src={logoname}/>

            </div>
            <div className='navBar'>
            <ul class="nav-list">
                <li class="nav-item">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#home">Place to stay</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#home"> NFTs </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#home">Community</a>
                </li>
                
            </ul>

            </div>
            <div className='collapseButton'>
                <input type= "button" value="connect wallet" class="connect_button" />
            </div>


        </div>
    </div>
  )
}
