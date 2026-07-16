import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Common/NavBar';
import Footer from './components/Common/Footer';
import './App.css';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import OurProduct from './pages/OurProduct';
import Sustainability from './pages/Sustainability';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/products" element={<OurProduct />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
