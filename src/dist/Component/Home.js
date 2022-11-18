import React from 'react';
import Header from './Header';
import '../scss/main.scss'
import SectionHome from './SectionHome';
import SectionMain from './SectionMain';
import OtherLinks from './OtherLinks';
import SectionNft from './SectionNft';
import Footer from './Footer';

export default function Home() {
  return (
    <div>

<Header/>    
<SectionHome/>
 <OtherLinks/>
 <SectionMain/>
 <SectionNft/>
 <Footer/>
    </div>
  )
}
