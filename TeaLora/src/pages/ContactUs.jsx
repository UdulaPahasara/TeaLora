import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Typography, TextField, Button, IconButton, Snackbar, Alert } from '@mui/material';
import Seo from '../components/Common/Seo';
import { useForm, Controller } from 'react-hook-form';
import { MuiTelInput } from 'mui-tel-input';
import contactHero from '../assets/ContactUs/contacthero.webp';
import fbIcon from '../assets/ContactUs/fb.webp';
import instaIcon from '../assets/ContactUs/insta.webp';
import whatsappIcon from '../assets/ContactUs/whatssapp.webp';

const ContactUs = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      contact_number: '',
      email: '',
      message: ''
    }
  });

  const sendEmail = (data) => {
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("EmailJS Config:", { serviceId, templateId, publicKey, data });

    if (!serviceId || !templateId || !publicKey) {
      setSnackbarMessage('Error: Environment variables are missing! Did you restart the server?');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      setIsSubmitting(false);
      return;
    }

    emailjs.send(serviceId, templateId, data, publicKey)
      .then((result) => {
          setSnackbarMessage('Message sent successfully!');
          setSnackbarSeverity('success');
          setOpenSnackbar(true);
          reset();
          setIsSubmitting(false);
      }, (error) => {
          console.error("EmailJS Error:", error);
          setSnackbarMessage(`Failed to send message: ${error.text || error.message || 'Check console'}`);
          setSnackbarSeverity('error');
          setOpenSnackbar(true);
          setIsSubmitting(false);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box 
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#ffffff',
      }}
    >
      <Seo title="Contact Us" description="Contact TeaLora, your trusted wholesale Ceylon tea suppliers and bulk tea exporters in Sri Lanka. Get in touch for B2B partnerships and private label export opportunities." />
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '250px', sm: '300px', md: '370px' },
          backgroundImage: `url("${contactHero}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 2, sm: 4 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 800,
            fontSize: { xs: '40px', sm: '50px', md: '62.41px' },
            lineHeight: { xs: '50px', sm: '65px', md: '82.7px' },
            textTransform: 'uppercase',
            color: '#FFFFFF',
            mb: 2,
            maxWidth: '546px',
          }}
        >
          CONTACT US
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: { xs: '14px', sm: '16px', md: '18px' },
            lineHeight: { xs: '20px', sm: '22px', md: '22px' },
            color: '#FFFFFF',
            maxWidth: '632px',
          }}
        >
          We're here to answer your questions and help you discover the finest Ceylon tea. Get in touch with our team for inquiries, partnerships, or export opportunities.
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          py: { xs: 5, md: 10, lg: '100px' }, 
          px: { xs: 2, sm: 4, lg: 0 },
          bgcolor: '#ffffff'
        }}
      >
        <Box 
          sx={{
            width: '100%',
            maxWidth: '1440px',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'center',
            gap: { xs: 3, md: 6, lg: '52px' },
          }}
        >
          {/* Text Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: '492px' },
              textAlign: { xs: 'center', md: 'left' },
              alignItems: { xs: 'center', md: 'flex-start' }
            }}
          >
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: { xs: '15px', md: '22px' },
                lineHeight: '22px',
                color: 'rgba(202, 153, 58, 1)',
                mb: '12px'
              }}
            >
              Get In Touch
            </Typography>
            
            <Typography 
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: { xs: '22px', md: '35px' },
                lineHeight: { xs: '30px', md: '45px' },
                color: 'rgba(0, 0, 0, 1)',
                textTransform: 'uppercase',
                mb: '24px'
              }}
            >
              Let's Brew Something Exceptional Together
            </Typography>
            
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: { xs: '18px', md: '20px' },
                color: 'rgba(117, 117, 117, 1)',
                mb: { xs: 0, md: '40px' }
              }}
            >
              Whether you're looking to source premium Ceylon tea or simply learn more about our products, our team is ready to assist. We look forward to building lasting relationships with customers and partners around the world.
            </Typography>

            {/* Follow Us (Desktop only) */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', gap: '9px', alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Typography 
                sx={{
                  fontFamily: 'Rubik, sans-serif',
                  fontWeight: 500,
                  fontSize: '22px',
                  lineHeight: '33.1px',
                  color: 'rgba(0, 0, 0, 1)',
                }}
              >
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: '22px' }}>
                <IconButton 
                  component="a" 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ p: 0, '&:hover': { opacity: 0.8 } }}
                >
                  <Box component="img" src={fbIcon} alt="Facebook" sx={{ width: '27.5px', height: '27.5px' }} />
                </IconButton>
                <IconButton 
                  component="a" 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ p: 0, '&:hover': { opacity: 0.8 } }}
                >
                  <Box component="img" src={instaIcon} alt="Instagram" sx={{ width: '27.5px', height: '27.5px' }} />
                </IconButton>
                <IconButton 
                  component="a" 
                  href="https://wa.me/94714436642" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  sx={{ p: 0, '&:hover': { opacity: 0.8 } }}
                >
                  <Box component="img" src={whatsappIcon} alt="WhatsApp" sx={{ width: '27.5px', height: '27.5px' }} />
                </IconButton>
              </Box>
            </Box>
          </Box>

          {/* Form Area */}
          <Box 
            component="form"
            onSubmit={handleSubmit(sendEmail)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: '623px' },
              bgcolor: '#ffffff',
              borderRadius: '20px',
              p: { xs: '30px 20px', md: '46px 42px' },
              boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.08)',
              gap: { xs: '30px', md: '45px' }
            }}
          >
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Name is required' }}
              render={({ field }) => (
                <TextField 
                  {...field}
                  label="Your Name" 
                  variant="standard" 
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  sx={{
                    '& .MuiInputBase-root': { 
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: '16px',
                      color: '#000000',
                      pb: 1
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Poppins, sans-serif'
                    }
                  }}
                />
              )}
            />
            
            <Controller
              name="contact_number"
              control={control}
              rules={{ 
                required: 'Contact number is required',
                validate: (value) => value.length > 5 || 'Enter a valid phone number'
              }}
              render={({ field, fieldState }) => (
                <MuiTelInput 
                  {...field}
                  label="Contact Number" 
                  variant="standard" 
                  fullWidth
                  defaultCountry="LK"
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : null}
                  sx={{
                    '& .MuiInputBase-root': { 
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: '16px',
                      color: '#000000',
                      pb: 1
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Poppins, sans-serif'
                    }
                  }}
                />
              )}
            />

            <Controller
              name="email"
              control={control}
              rules={{ 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              }}
              render={({ field }) => (
                <TextField 
                  {...field}
                  type="email"
                  label="Email Address" 
                  variant="standard" 
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={{
                    '& .MuiInputBase-root': { 
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: '16px',
                      color: '#000000',
                      pb: 1
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Poppins, sans-serif'
                    }
                  }}
                />
              )}
            />

            <Controller
              name="message"
              control={control}
              rules={{ required: 'Message is required' }}
              render={({ field }) => (
                <TextField 
                  {...field}
                  label="Your Inquiry" 
                  variant="standard" 
                  fullWidth
                  multiline
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  sx={{
                    '& .MuiInputBase-root': { 
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: '16px',
                      color: '#000000',
                      pb: 1
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Poppins, sans-serif'
                    }
                  }}
                />
              )}
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              variant="contained"
              sx={{
                width: '100%',
                height: '48px',
                bgcolor: '#000000',
                borderRadius: '10px',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: '16px', 
                textTransform: 'uppercase',
                color: '#fff',
                mt: { xs: 1, md: 3 },
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: '#333333',
                  boxShadow: 'none'
                }
              }}
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
            </Button>
          </Box>

          {/* Follow Us (Mobile/Tablet only) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: '9px', alignItems: 'center', mt: { xs: 2, sm: 4 } }}>
            <Typography 
              sx={{
                fontFamily: 'Rubik, sans-serif',
                fontWeight: 500,
                fontSize: '22px',
                lineHeight: '33.1px',
                color: 'rgba(0, 0, 0, 1)',
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: '22px' }}>
              <IconButton 
                component="a" 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ p: 0, '&:hover': { opacity: 0.8 } }}
              >
                <Box component="img" src={fbIcon} alt="Facebook" sx={{ width: '27.5px', height: '27.5px' }} />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ p: 0, '&:hover': { opacity: 0.8 } }}
              >
                <Box component="img" src={instaIcon} alt="Instagram" sx={{ width: '27.5px', height: '27.5px' }} />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://wa.me/94714436642" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ p: 0, '&:hover': { opacity: 0.8 } }}
              >
                <Box component="img" src={whatsappIcon} alt="WhatsApp" sx={{ width: '27.5px', height: '27.5px' }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Customer Care Unit Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pb: { xs: 5, md: 10, lg: '100px' },
          px: { xs: 2, sm: 4, lg: 0 },
          bgcolor: '#ffffff',
          textAlign: 'center'
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: { xs: '15px', md: '22px' },
            lineHeight: { xs: '22px', md: '22px' },
            color: 'rgba(202, 153, 58, 1)',
            textTransform: 'uppercase',
            mb: 2,
            maxWidth: '492px'
          }}
        >
          Our Customer Care Unit
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: { xs: '14px', md: '16px' },
            lineHeight: { xs: '20px', md: '20px' },
            color: 'rgba(117, 117, 117, 1)',
            maxWidth: '921px',
            mb: 4
          }}
        >
          Our dedicated customer care team is here to assist with product inquiries, export partnerships, order support, and general questions. Whether you're looking for premium Ceylon tea, need assistance with your purchase, or want to discuss business opportunities, we're just a call or message away.
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: { xs: '14px', md: '16px' },
            lineHeight: { xs: '20px', md: '20px' },
            color: 'rgba(0, 0, 0, 1)',
            maxWidth: '304px'
          }}
        >
          Customer Care: +94 71 443 6642<br />
          Email: info@tealoraceylon.com
        </Typography>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;
