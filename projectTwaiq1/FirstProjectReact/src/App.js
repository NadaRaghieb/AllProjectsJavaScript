
import './App.css';

import {Routes, Route } from 'react-router'
import Main from './pages/Main'
import Navbar from './pages/Navbar'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Footer from './pages/Footer'
import Login from './pages/Login'



function App() {
  return (
    <div className="body">
        <Navbar/>
        
        <Routes>
          <Route path="/" element={ <Main />} exact />
          <Route exact path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<Product />} />
          
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<Login/>}/> 
    </Routes>

      <Footer/>
    </div>
   
  );
}

export default App;
