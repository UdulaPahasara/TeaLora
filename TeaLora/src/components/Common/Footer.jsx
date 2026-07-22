import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

import logo from '../../assets/Navbar/Logo.webp';
import fbIcon from '../../assets/ContactUs/fb.webp';
import instaIcon from '../../assets/ContactUs/insta.webp';
import whatsappIcon from '../../assets/ContactUs/whatssapp.webp';

import locationIcon from '../../assets/Footer/location.webp';
import callIcon from '../../assets/Footer/call.webp';
import mailIcon from '../../assets/Footer/mail.webp';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        width: '100%',
        bgcolor: '#050505',
        color: '#ffffff',
        pt: { xs: 8, md: 10 },
        pb: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Main Footer Content */}
      <Box 
        sx={{
          width: '100%',
          maxWidth: '1440px',
          px: { xs: 3, sm: 6, lg: 12 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 6, md: 4 },
          mb: { xs: 6, md: 8 }
        }}
      >
        {/* Column 1: Brand & Social */}
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '414px', gap: 3 }}>
          <Box 
            component="img" 
            src={logo} 
            alt="Tealora" 
            sx={{ width: '210px', height: 'auto', objectFit: 'contain' }} 
          />
          <Typography 
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24.07px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}
          >
            Experience the authentic taste of premium Ceylon tea, crafted with passion, quality, and Sri Lanka's rich tea heritage for customers around the world.
          </Typography>
          
          {/* Social Icons */}
          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            {[
              { icon: fbIcon, link: 'https://www.facebook.com/' },
              { icon: instaIcon, link: 'https://www.instagram.com/' },
              { icon: whatsappIcon, link: 'https://wa.me/94707372773' }
            ].map((social, index) => (
              <IconButton 
                key={index}
                component="a"
                href={social.link}
                target="_blank"
                sx={{
                  width: '45px',
                  height: '45px',
                  border: '1px solid rgba(255, 255, 255, 1)',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                <Box 
                  component="img" 
                  src={social.icon} 
                  alt="Social" 
                  sx={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} 
                />
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Column 2: Quick Links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography 
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '28.08px',
              mb: 1
            }}
          >
            Quick Links
          </Typography>
          {['Home', 'About Us', 'Products', 'Sustainability', 'FAQ','Contact Us'].map((text, i) => {
            const routes = ['/', '/about', '/products', '/sustainability', '/faq','/contact'];
            return (
              <Typography 
                key={i}
                component={Link}
                to={routes[i]}
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24.07px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none',
                  '&:hover': { color: '#ffffff' }
                }}
              >
                {text}
              </Typography>
            );
          })}
        </Box>

        {/* Column 3: Contact Us */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography 
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '28.08px',
              mb: 1
            }}
          >
            Contact Us
          </Typography>
          
          {/* Location */}
          <Box 
            component="a"
            href="https://www.google.com/maps/search/?api=1&query=Asgiriya+West,+Gampaha,+Sri+Lanka"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', textDecoration: 'none', '&:hover .MuiTypography-root': { color: '#ffffff' } }}
          >
            <Box component="img" src={locationIcon} alt="Location" sx={{ width: '20px', height: '20px', mt: 0.5 }} />
            <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24.07px', color: 'rgba(255, 255, 255, 0.7)', maxWidth: '200px', transition: 'color 0.3s ease' }}>
              Asgiriya West, Gampaha,<br/>Sri Lanka
            </Typography>
          </Box>

          {/* Phone */}
          <Box 
            component="a"
            href="tel:0707372773"
            sx={{ display: 'flex', gap: 2, alignItems: 'center', textDecoration: 'none', '&:hover .MuiTypography-root': { color: '#ffffff' } }}
          >
            <Box component="img" src={callIcon} alt="Phone" sx={{ width: '20px', height: '20px' }} />
            <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24.07px', color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.3s ease' }}>
              0707372773
            </Typography>
          </Box>

          {/* Email */}
          <Box 
            component="a"
            href="mailto:info@tealoraceylon.com"
            sx={{ display: 'flex', gap: 2, alignItems: 'center', textDecoration: 'none', '&:hover .MuiTypography-root': { color: '#ffffff' } }}
          >
            <Box component="img" src={mailIcon} alt="Email" sx={{ width: '20px', height: '20px' }} />
            <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24.07px', color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.3s ease' }}>
              info@tealoraceylon.com
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom Bar */}
      <Divider sx={{ width: '100%', borderColor: 'rgba(255, 255, 255, 0.1)', mb: 3 }} />
      <Box sx={{ width: '100%', maxWidth: '1440px', px: { xs: 3, sm: 6, lg: 12 }, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
        <Typography 
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '9.74px',
            color: 'rgba(203, 203, 203, 1)'
          }}
        >
          © Copyright 2026 Tealora. Web Solution By <a href="https://roodwave.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>ROODWAVE</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
