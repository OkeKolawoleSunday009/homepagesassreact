import React from 'react';
import '../scss/section/sectionnft.scss';
import image7 from '../Component/images/image7.png';
import image8 from '../Component/images/image8.png';
import image9 from '../Component/images/image9.png';



export default function SectionNft() {
  return (
    <div className='sectionnft'>
        <div className='nft_abt'>
            <div className='meta_head'>Metabnb NFTs</div>
            <div className='meta_text'>
             Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives
             our cutomer access to loads of our exclusive services.
            </div>
            <div className=''>
                <input className='meta_button' type="submit" value="Learn More"/>
            </div>

        </div >

        <div className='nft_view'>
            <div className='content'>
                <div className='image_wrapper'>
                          
            <img className='img_luxury image7' src={image9} alt="nftluxury"/>
            <img  className='img_luxury2 image8' src={image8} alt="nftluxury"/>
            <img  className='img_luxury image9' src={image7} alt="nftluxury"/>



                </div>
          
            </div>
        </div>


    </div>
  )
}
