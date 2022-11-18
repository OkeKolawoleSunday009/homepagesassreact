import React from 'react';
import '../scss/section/other_links.scss';
import token from '../Component/images/token.png';
import meta from '../Component/images/meta.png';
import opensea from '../Component/images/opensea.png';


export default function OtherLinks() {
  return (
    <div className="other_links">
        <div className='digital_currency first'>
            <img className='logo' src={token} alt="mbtoken"/>
            MBTOKEN
            </div>
          <div className='digital_currency second'>
          <img className='logo' src={meta} alt="meta"/>

            METAMASK
            </div>
          <div className='digital_currency third'>
          <img className='logo' src={opensea} alt="opensea"/>

           OpenSea
            </div>

    </div>
  )
}
