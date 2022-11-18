import { FacebookRounded, Instagram, Twitter} from '@mui/icons-material/';
import React from 'react';
import home from '../Component/images/home.png';
import logoname from '../Component/images/logoname.png';
import '../scss/section/footer.scss';



export default function Footer() {
  return (
    <div className='footer'>

        <div className='footer_one'>
            <div  className='sub_one'>
                <div className='logo'>
                    <img id="logo_image" src={home}/>
                    <img id="logo_name" src={logoname}/>

                </div>
           </div>

           <div className='sub_two'>
            <FacebookRounded />
            <Instagram/>
            <Twitter/>

            

           </div>

           <div className='sub_three'>        
           @2022 Metabnb
           </div>
        </div>

        <div className='footer_two'>
        <div className='heading'>Community</div>
            <div>NFTs</div>
            <div>Token</div>
            <div>LordBoard</div>
            <div>Discord</div>


        </div>


        <div className='footer_three' >
          <div className='heading'>Places</div>
          <div>Community</div>
          <div>Community</div>
          <div>Community</div>
          <div>Community</div>

        </div>


        <div className='footer_four' >
          <div className='heading'>About</div>
          <div>Community</div>
          <div>Community</div>
          <div>Community</div>
          <div>Community</div>

        </div>




    </div>
  )
}
