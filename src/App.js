import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
// import NaviBar  from "./Components/NaviBar/NaviBar";
import ContactUs from "./Components/ContactUs/ContactUs";
import { Route, Routes} from 'react-router-dom';
import Service  from './Components/Service/Service';
import  AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      {/* <header className="App-header"> */}
      <Header/>
       { <Routes>
  <Route path='/service' element={<Service/>}/>
  <Route path="/" element={<Home/>}/>
 
      <Route path='/aboutus' element={<AboutUs/>}/>
         <Route path='/contactus' element={<ContactUs/>}/> 
 </Routes> }
         <Footer/>
      {/* </header> */}/
    </div>
  );
}

export default App;




