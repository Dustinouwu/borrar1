import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Router
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Helmet>
        <title>Mundi Auto's Ecuador - Tu mejor opción en electromecánica</title>
        <meta name="description" content="Ofrecemos servicios de electromecánica en Ecuador con enfoque en soluciones industriales y comerciales. Contáctanos para más información." />
        <meta name="keywords" content="electromecánica, Ecuador, mundiautos, mundiautos ecuador, servicios mecanicos, Ofelia electromecanica, electromecanica Ofelia, soluciones electromecánicas" />
        <meta name="author" content="David Alexander Chávez Pérez" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>


  );
}

export default App;
