import React, { useState } from 'react';
import '../scss/section/connect_wallet.scss';
import Home from './Home';
import {Link} from 'react-router-dom';
import { Cancel } from '@mui/icons-material';







export default function ConnectWallet() {


  return (
     <div className='container' >



        <div className="blur"><Home/></div>
        <div className='connect_wallet'>

        <div className='heading'>
           <div> Connect Wallet</div>

           <Link to={`/`}>
            <div className='cancel '>
               <Cancel/>    
            </div>
           </Link>
        </div>

        <div className='content'>
            <div className="plain_text">
                Choose your prefered wallet
            </div>

            <div className='connect_button'>

                <div className='input'>
                    <div >Metamask</div><div  className="arrow">></div>
                </div>
                <div className='input'>
                    <div>WalletConnect</div><div  className="arrow">></div>
                </div>
                {/* <input className='connect' type="submit" value="Metamask"/>
                <input className='connect' type="submit" value="WalletConnect"/> */}

            </div>


        </div>

       
    </div>

     </div>
    
  )
}
