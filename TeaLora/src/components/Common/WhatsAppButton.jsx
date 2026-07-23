import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import whatsappIcon from '../../assets/Home/whatsapp.webp';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: '10px', sm: '50px', lg: '45px' },
        right: { xs: '-7px', sm: '-8px', lg: '-25px' },
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <IconButton
        onClick={() => setIsVisible(false)}
        sx={{
          bgcolor: '#fff',
          width: '24px',
          height: '24px',
          mb: { xs: -2.5, sm: -3, lg: -4 },
          mr: { xs: 1, sm: 2.5, lg: 4.5 },
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          
        }}
      >
        <CloseIcon sx={{ fontSize: '14px', color: '#333' }} />
      </IconButton>
      <Box
        component="a"
        href="https://wa.me/94707372773"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          width: '40px',
          height: '40px',
          display: 'block',
          cursor: 'pointer',
          mt: { xs: '10px', sm: '15px', lg: '21.83px' },
          mb: { xs: '10px', sm: '15px', lg: '21.83px' },
          mr: { xs: '20px', sm: '30px', lg: '43.66px' },
        }}
      >
        <Box
          component="img"
          src={whatsappIcon}
          alt="WhatsApp"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
    </Box>
  );
};

export default WhatsAppButton;
