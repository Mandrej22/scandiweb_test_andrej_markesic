import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Layout from './layouts/Layout';

import Category from './pages/Category';
import Product from './pages/Product'
import Cart from './pages/Cart';
import './default.css';



class App extends React.Component{
  render(){
    return (
      <div className='app'>
      <Routes>
      <Route path='/' element={<Layout><Category /></Layout>}/>
      <Route path='/product' element={<Layout><Product /></Layout>}/>
      <Route path='/cart' element={<Layout><Cart /></Layout>}/>
      </Routes>
      </div>     
    );
  }  
}

export default App;
