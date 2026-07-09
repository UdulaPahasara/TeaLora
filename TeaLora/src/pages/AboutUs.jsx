import React from 'react';
import { Box, Typography } from '@mui/material';
import aboutHero from '../assets/AboutUS/AboutHero.webp';
import who1 from '../assets/AboutUS/who1.webp';
import who2 from '../assets/AboutUS/who2.webp';
import who3 from '../assets/AboutUS/who3.webp';
import authentic from '../assets/AboutUS/authentic.webp';
import authenticBackground from '../assets/AboutUS/authenticbackground.webp';
import commitment1 from '../assets/AboutUS/commitment1.webp';
import commitment2 from '../assets/AboutUS/commitment2.webp';
import commitment3 from '../assets/AboutUS/commitment3.webp';

const AboutUs = () => {
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
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '250px', sm: '300px', md: '370px' },
          backgroundImage: `url(${aboutHero})`,
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
            maxWidth: '504px',
          }}
        >
          About Us
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
          Experience the heritage of authentic Ceylon tea, carefully crafted in Sri Lanka and shared with tea lovers around the world.
        </Typography>
      </Box>

      {/* Who We Are Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          pt: { xs: 5, md: 10, lg: '100px' }, 
          pb: { xs: 1, md: 10, lg: '150px' }, 
          px: { xs: 2, sm: 4, lg: 0 },
          bgcolor: '#ffffff'
        }}
      >
        <Box 
          sx={{
            width: '100%',
            maxWidth: '1440px',
            display: 'flex',
            flexDirection: { xs: 'column-reverse', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, lg: '90px' },
          }}
        >
          {/* Image Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: { xs: '9px', sm: '20px' },
              width: { xs: '100%', lg: '590px' },
              height: { xs: '240px', sm: '367px', lg: '367px' },
              justifyContent: 'center'
            }}
          >
            {/* Left Image */}
            <Box 
              component="img"
              src={who1}
              alt="Who We Are 1"
              sx={{
                width: { xs: '50%', sm: '50%', lg: '285px' },
                height: '100%',
                borderRadius: { xs: '15px', sm: '30px' },
                objectFit: 'cover'
              }}
            />
            {/* Right Images Column */}
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '9px', sm: '17px' },
                width: { xs: '50%', sm: '50%', lg: '285px' },
                height: '100%'
              }}
            >
              <Box 
                component="img"
                src={who2}
                alt="Who We Are 2"
                sx={{
                  width: '100%',
                  height: { xs: 'calc((100% - 9px) / 2)', sm: 'calc((100% - 17px) / 2)', lg: '182px' },
                  borderRadius: { xs: '15px', sm: '30px' },
                  objectFit: 'cover'
                }}
              />
              <Box 
                component="img"
                src={who3}
                alt="Who We Are 3"
                sx={{
                  width: '100%',
                  height: { xs: 'calc((100% - 9px) / 2)', sm: 'calc((100% - 17px) / 2)', lg: '168px' },
                  borderRadius: { xs: '15px', sm: '30px' },
                  objectFit: 'cover'
                }}
              />
            </Box>
          </Box>

          {/* Text Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: '532px' },
              gap: '21px',
              textAlign: { xs: 'center', lg: 'left' },
              alignItems: { xs: 'center', lg: 'flex-start' }
            }}
          >
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: { xs: '15px', md: '22px' },
                lineHeight: '22px',
                color: 'rgba(202, 153, 58, 1)',
              }}
            >
              Who We Are
            </Typography>
            
            <Typography 
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: { xs: '22px', md: '35px' },
                lineHeight: { xs: '30px', md: '40px' },
                color: 'rgba(0, 0, 0, 1)',
              }}
            >
              Sharing the Finest of Sri Lanka with the World
            </Typography>
            
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '15px', md: '18px' },
                lineHeight: '22px',
                color: 'rgba(117, 117, 117, 1)',
              }}
            >
              Tealora Ceylon (Private) Limited is dedicated to producing premium Ceylon tea and natural wellness products that celebrate Sri Lanka's rich tea heritage. Combining traditional craftsmanship with modern quality standards, we create exceptional products that offer outstanding taste, authenticity, and wellness in every cup.
              <br /><br />
              Our commitment to quality, sustainability, and customer satisfaction has made us a trusted partner for tea enthusiasts and businesses worldwide.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Authentic Ceylon Tea Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          height: { xs: 'auto', lg: '265px' },
          display: 'flex',
          justifyContent: 'center',
          py: { xs: '0px', md: 0, lg: '8px' }, 
          px: { xs: 0, sm: 4, lg: '10px' },
          bgcolor: '#ffffff'
        }}
      >
        <Box 
          sx={{
            width: '100%',
            maxWidth: '1197px',
            height: { xs: 'auto', lg: '265px' },
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'rgba(255, 246, 232, 1)',
            borderRadius: '30px',
            p: { xs: 4, lg: '0 80px 0 100px' },
            position: 'relative',
          }}
        >
          {/* Text Area */}
          <Box 
            sx={{
              width: { xs: '100%', lg: '600px' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              py: { xs: 0, lg: '80px' },
              zIndex: 2,
            }}
          >
            <Typography 
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: { xs: '28px', md: '40px' },
                lineHeight: { xs: '36px', md: '50px' },
                textTransform: 'uppercase',
                color: 'rgba(0, 0, 0, 1)',
                mb: 2,
                maxWidth: '532px'
              }}
            >
              Authentic Ceylon Tea, Crafted with Passion
            </Typography>
            
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: '20px',
                color: 'rgba(117, 117, 117, 1)',
                maxWidth: '600px'
              }}
            >
              Every Tealora collection reflects our dedication to quality, elegance, and the timeless tradition of Sri Lankan tea. From carefully selected tea leaves to beautifully designed packaging, we deliver premium products that create memorable experiences for customers across the globe.
            </Typography>
          </Box>

          {/* Image Area */}
          <Box 
            sx={{
              position: 'relative',
              width: { xs: '100%', lg: '422.5px' },
              height: { xs: 'auto', lg: '370px' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              py: { xs: 4, lg: 0 }
            }}
          >
            {/* Authentic Background Image */}
            <Box 
              component="img"
              src={authenticBackground}
              alt="Background Shape"
              sx={{
                display: { xs: 'none', lg: 'block' },
                position: 'absolute',
                top: '54px',
                left: 76,
                width: '422.5px',
                height: '260px',
                borderRadius: '20px',
                objectFit: 'cover',
              }}
            />
            
            {/* Authentic Image (Tin) */}
            <Box 
              component="img"
              src={authentic}
              alt="Authentic Ceylon Tea"
              sx={{
                position: { lg: 'absolute' },
                top: { lg: -55 },
                left: { lg: '105.5px' },
                width: { xs: '266px', lg: '266px' },
                height: { xs: 'auto', lg: '349px' },
                objectFit: 'contain',
                zIndex: 2,
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Our Commitment Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          py: { xs: 5, md: 10, lg: '75px' }, 
          px: { xs: 2, sm: 4, lg: 0 },
          bgcolor: '#ffffff'
        }}
      >
        <Box 
          sx={{
            width: '100%',
            maxWidth: '1440px',
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, lg: '90px' },
          }}
        >
          {/* Text Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: '537px' },
              gap: '21px',
              textAlign: { xs: 'center', lg: 'left' },
              alignItems: { xs: 'center', lg: 'flex-start' }
            }}
          >
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: { xs: '15px', md: '22px' },
                lineHeight: '22px',
                color: 'rgba(202, 153, 58, 1)',
              }}
            >
              Our Commitment
            </Typography>
            
            <Typography 
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: { xs: '22px', md: '35px' },
                lineHeight: { xs: '30px', md: '40px' },
                color: 'rgba(0, 0, 0, 1)',
              }}
            >
              Quality, Sustainability & Lasting Partnerships
            </Typography>
            
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '15px', md: '18px' },
                lineHeight: '22px',
                color: 'rgba(117, 117, 117, 1)',
              }}
            >
              At Tealora Ceylon, our mission is to deliver world-class Ceylon tea while supporting Sri Lankan farmers and promoting responsible manufacturing practices. We believe that exceptional products begin with ethical sourcing, sustainable production, and a commitment to preserving the rich heritage of Sri Lankan tea.
              <br /><br />
              By building long-term relationships with customers and partners worldwide, we continue to introduce authentic Sri Lankan tea and natural wellness products to the global market with excellence and integrity.
            </Typography>
          </Box>

          {/* Image Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: { xs: '9px', sm: '17px' },
              width: { xs: '100%', lg: '587px' },
              height: { xs: '240px', sm: '387px', lg: '387px' },
              justifyContent: 'center'
            }}
          >
            {/* Left Images Column */}
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '9px', sm: '17px' },
                width: { xs: '50%', lg: '285px' },
                height: '100%'
              }}
            >
              <Box 
                component="img"
                src={commitment1}
                alt="Our Commitment 1"
                sx={{
                  width: '100%',
                  height: { xs: 'calc(182px / 387px * 100%)', lg: '182px' },
                  borderRadius: { xs: '15px', sm: '30px' },
                  objectFit: 'cover'
                }}
              />
              <Box 
                component="img"
                src={commitment2}
                alt="Our Commitment 2"
                sx={{
                  width: '100%',
                  height: { xs: 'calc(188px / 387px * 100%)', lg: '188px' },
                  borderRadius: { xs: '15px', sm: '30px' },
                  objectFit: 'cover'
                }}
              />
            </Box>
            
            {/* Right Image */}
            <Box 
              component="img"
              src={commitment3}
              alt="Our Commitment 3"
              sx={{
                width: { xs: '50%', lg: '285px' },
                height: '100%',
                borderRadius: { xs: '15px', sm: '30px' },
                objectFit: 'cover',
                objectPosition: { md: 'bottom', lg: 'center' }
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
