// import logo from './logo.svg';
import './App.css';
// import Header from './dist/Component/Header';
import '../src/dist/scss/main.scss'
// import SectionHome from './dist/Component/SectionHome';
// import SectionMain from './dist/Component/SectionMain';
// import OtherLinks from './dist/Component/OtherLinks';
// import SectionNft from './dist/Component/SectionNft';
// import Footer from './dist/Component/Footer';
import  { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './dist/Component/Home';
import ConnectWallet from './dist/Component/ConnectWallet';


function App() {
  return (
    <div className= "">
      <Router>
         
      
         <Routes>
         <Route path="/" element={ <Home/>}/>
 
         <Route path="/ConnectWallet" element={<ConnectWallet/>}/>
 
         </Routes>
 
       </Router>

       
      
    </div>
  );
}

export default App;
