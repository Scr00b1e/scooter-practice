import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './app.scss'
import Accesories from './pages/accesorites/Accesories';
import Catalog from './components/catalog/Catalog';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Home from './pages/Home';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Header/>
      <Catalog/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/accesories' element={<Accesories/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
