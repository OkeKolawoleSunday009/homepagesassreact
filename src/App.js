// import logo from './logo.svg';
import './App.css';
import Header from './dist/Component/Header';
import '../src/dist/scss/main.scss'
import SectionHome from './dist/Component/SectionHome';
import SectionMain from './dist/Component/SectionMain';

function App() {
  return (
    <div className= "">
      <Header/>
      <SectionHome/>
      <SectionMain/>
      
    </div>
  );
}

export default App;
