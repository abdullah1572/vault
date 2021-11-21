import './App.scss';
import React from 'react';
import Landing from './components/landing/Landing.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/landing/footer/Footer.js';
import Navbar from './components/landing/header/Navbar.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useWeb3React } from '@web3-react/core';


function App() {
  const { account } = useWeb3React();
  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Landing} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
