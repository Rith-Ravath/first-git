import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Page/Home';
import Read from '../src/Page/Read';
import AboutUs from '../src/Page/AboutUs';
import ContactUs from '../src/Page/ContactUs'
import loadingView from './Components/skelation';
import HomeMenu from './Components/Home';
import { MyFooter } from './Components/Footer';
import InsertProduct from './Page/InsertProducts';

function App() {
  return (
    <div className='container-fluid bg-light p-0'>
    <HomeMenu/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/read/:id' element={<Read/>}/>
      <Route path='/me' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/create/product' element={<InsertProduct/>}/>
      </Routes>
      <MyFooter/>
    </div>
  );
}

export default App;
