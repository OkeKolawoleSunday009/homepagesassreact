import React, { useEffect , useState } from 'react'
import '../scss/section/header.scss';
import home from '../Component/images/home.png';
import logoname from '../Component/images/logoname.png';
import {Link} from 'react-router-dom';
import { ScreenLockLandscapeOutlined } from '@mui/icons-material';




export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled,setScrolled ] = useState(false);

  useEffect(() => {
    const onScroll = () => {  
      if(window.scrollY > 50){
        setScrolled(true);
      }else{
        setScrolled(false)
  
      }
    }

    window.addEventListener("scroll", onscroll);
    return () =>  window.addEventListener("scroll", onscroll);
    

  }, []);

  const onUpdateActiveLink=(value) =>{
    setActiveLink(value);
  }
  return (
    <div className="">

        <div className='header'>
            <div className='logo'>
               <img id="logo_image" src={home}/>
                <img id="logo_name" src={logoname}/>

            </div>
            <div className='navBar'>
              {/* className={scrolled ? "scrolled" : ''} */}
            <ul class="nav-list">
                  
            <li class="nav-item">
                    <a className={activeLink === 'home' ? 'active navbar-Lnk': 'navbar-Link'}  href="#home">Home </a>
                </li>
                   
                <li class="nav-item">
                    <a class="nav-link" href="#home"> Bnb </a>
                </li>

              
                
                <li class="nav-item">
                    <a class="nav-link" href="#home"> NFTs </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#home">Community</a>
                </li>
                
            </ul>

            </div>
          
            <Link to ={`/ConnectWallet`} >
            <div className='collapseButton'>
            <input type= "button" value="connect wallet" class="connect_button" />
            </div>
          </Link>
  
           


        </div>
    </div>
  )
}
