import './index.scss';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import Club from './Pages/Club/Club';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import Forum from './Pages/Forum/Forum';
import ReactDOM from 'react-dom/client';
import Contact from './Pages/Contact/Contact';
import reportWebVitals from './reportWebVitals';
import Register from './Pages/Register/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/club' element={<Club />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
