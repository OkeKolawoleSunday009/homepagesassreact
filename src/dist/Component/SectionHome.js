import React from 'react';
import '../scss/section/sectionhome.scss';
import image3 from '../Component/images/image3.png';
import image5 from '../Component/images/image5.png';



export default function SectionHome() {
  return (
    <div className="sectionhome">

        <div className='rent_text'>
           <div className='home_text'>
            Rent a <span>Place</span> away from <span>Home</span> in the <span> Multiverse </span>
            </div>

            <div className='motto_text'>
            we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone

            </div>

            <div className='subscribe'>
                <input type="text" id="text_input" placeholder='Enter your Email' />
                <input type="submit" id="submit" value="search"/>
            </div>


        </div>

        <div className='rent_pics'>
            <div className='box_one'>
                
                <img class="nft_home" src={image3}/>
                <img class="nft_home" src={image5}/>

            </div>
            <div className='box_two'>
                <img class="nft_home" src={image5}/>
                <img class="nft_home" src={image3}/>
               
            </div>

        </div>
    </div>
  )
}
