import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Navbar from './components/Common/NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurProduct from './pages/OurProduct';
import Sustainability from './pages/Sustainability';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Footer from './components/Common/Footer';
import whatsappIcon from './assets/Home/whatsapp.webp';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showWhatsapp, setShowWhatsapp] = useState(true);

  return (
    <>
      <ScrollToTop />
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<OurProduct />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      {showWhatsapp && (
        <Box
          sx={{
            position: 'fixed',
            bottom: { xs: '10px', sm: '65px' },
            right: { xs: '9px', sm: '20px' },
            zIndex: 9999,
          }}
        >
          <Box
            component="span"
            onClick={() => setShowWhatsapp(false)}
            sx={{
              position: 'absolute',
              top: '-15px',
              right: '-5px',
              bgcolor: 'rgba(0,0,0,0.4)',
              color: '#fff',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '10px',
              zIndex: 1,
              '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' }
            }}
          >
            ✕
          </Box>
          <Box
            component="a"
            href="https://wa.me/94714436642"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'block',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              '@media (hover: hover) and (pointer: fine)': {
                '&:hover': {
                  transform: 'scale(1.1)',
                }
              }
            }}
          >
            <Box 
              component="img"
              src={whatsappIcon}
              alt="WhatsApp Chat"
              sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Box>
        </Box>
      )}
    </>
  );
}

export default App;
