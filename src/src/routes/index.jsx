import React, {Fragment} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../componentes/Pages/Home";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import Error  from "../componentes/Pages/Error";
import Login from "../componentes/Pages/Login";
import Cadastro from "../componentes/Pages/Cadastro";

const RoutesApp = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="*" component={Error} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default RoutesApp;