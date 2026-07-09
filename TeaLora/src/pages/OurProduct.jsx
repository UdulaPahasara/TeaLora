import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Seo from '../components/Common/Seo';
import ourProductHero from '../assets/OurProduct/ourProduct hero.webp';
import signature1 from '../assets/OurProduct/signature1.webp';
import signature2 from '../assets/OurProduct/signature2.webp';
import signature3 from '../assets/OurProduct/signature3.webp';
import signature4 from '../assets/OurProduct/signature4.webp';
import signature5 from '../assets/OurProduct/signature5.webp';
import luxury1 from '../assets/OurProduct/luxury1.webp';
import luxury2 from '../assets/OurProduct/luxury2.webp';
import luxury3 from '../assets/OurProduct/luxury3.webp';
import luxury4 from '../assets/OurProduct/luxury4.webp';
import luxury5 from '../assets/OurProduct/luxury5.webp';
import classic1 from '../assets/OurProduct/classic1.webp';
import classic2 from '../assets/OurProduct/classic2.webp';
import classic3 from '../assets/OurProduct/classic3.webp';
import classic4 from '../assets/OurProduct/classic4.webp';
import classic5 from '../assets/OurProduct/classic5.webp';

const OurProduct = () => {
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
      <Seo title="Our Products" description="Discover beautifully curated premium Ceylon tea gift collections, thoughtfully crafted to bring together exceptional taste, elegant presentation, and the timeless heritage of Sri Lanka." />
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '250px', sm: '300px', md: '370px' },
          backgroundImage: `url("${ourProductHero}")`,
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
          OUR GIFT PACKS
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: { xs: '14px', sm: '16px', md: '18px' },
            lineHeight: { xs: '20px', sm: '22px', md: '22px' },
            color: '#FFFFFF',
            maxWidth: '732px',
          }}
        >
          Discover beautifully curated premium Ceylon tea gift collections, thoughtfully crafted to bring together exceptional taste, elegant presentation, and the timeless heritage of Sri Lanka.
        </Typography>
      </Box>

      {/* Signature Collection Section */}
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
            flexDirection: { xs: 'column-reverse', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, lg: '59px' },
          }}
        >
          {/* Image Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              width: { xs: '100%', lg: '587px' },
            }}
          >
            {/* Main Image */}
            <Box 
              component="img"
              src={signature1}
              alt="Signature Collection Main"
              sx={{
                width: '100%',
                height: { xs: 'auto', lg: '412px' },
                borderRadius: '20px',
                objectFit: 'cover'
              }}
            />
            {/* Thumbnails Row */}
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: '12px',
              }}
            >
              {[signature2, signature3, signature4, signature5].map((imgSrc, index) => (
                <Box 
                  key={index}
                  component="img"
                  src={imgSrc}
                  alt={`Signature Collection ${index + 2}`}
                  sx={{
                    width: { xs: '22%', lg: '138px' },
                    height: { xs: 'auto', lg: '135px' },
                    borderRadius: '20px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                    transition: 'opacity 0.2s'
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Text Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: '551px' },
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
                mb: '21px'
              }}
            >
              Signature Collection
            </Typography>
            
            <Typography 
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: { xs: '22px', md: '35px' },
                lineHeight: { xs: '30px', md: '40px' },
                color: 'rgba(0, 0, 0, 1)',
                mb: '36px'
              }}
            >
              Premium Ceylon Tea Gift Collection
            </Typography>
            
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '15px', md: '18px' },
                lineHeight: '22px',
                color: 'rgba(117, 117, 117, 1)',
                mb: '36px',
                textAlign: { xs: 'center', lg: 'left' }
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis
              <br /><br />
              Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum  Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum
            </Typography>

            <Button 
              variant="contained"
              sx={{
                width: { xs: '170px', sm: '530px' },
                height: { xs: '40px', sm: '67px' },
                bgcolor: 'rgba(202, 153, 58, 1)',
                borderRadius: { xs: '9px', sm: '10px' },
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: { xs: '15px', sm: '16px' }, 
                textTransform: 'uppercase',
                color: '#fff',
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: 'rgba(180, 130, 40, 1)',
                  boxShadow: 'none'
                }
              }}
            >
              BUY NOW
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Luxury Collection Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          py: { xs: 3, md: 10, lg: '100px' }, 
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
            gap: { xs: 4, lg: '59px' },
          }}
        >
          {/* Text Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: '551px' },
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
                mb: '21px'
              }}
            >
              Luxury Collection
            </Typography>
            
            <Typography 
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: { xs: '22px', md: '35px' },
                lineHeight: { xs: '30px', md: '40px' },
                color: 'rgba(0, 0, 0, 1)',
                mb: '36px'
              }}
            >
              Exclusive Premium Gift Box.
            </Typography>
            
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '15px', md: '18px' },
                lineHeight: '22px',
                color: 'rgba(117, 117, 117, 1)',
                mb: '36px',
                textAlign: { xs: 'center', lg: 'left' }
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis
              <br /><br />
              Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum  Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum
            </Typography>

            <Button 
              variant="contained"
              sx={{
                width: { xs: '170px', sm: '530px' },
                height: { xs: '40px', sm: '67px' },
                bgcolor: 'rgba(202, 153, 58, 1)',
                borderRadius: { xs: '9px', sm: '10px' },
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: { xs: '15px', sm: '16px' }, 
                textTransform: 'uppercase',
                color: '#fff',
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: 'rgba(180, 130, 40, 1)',
                  boxShadow: 'none'
                }
              }}
            >
              BUY NOW
            </Button>
          </Box>

          {/* Image Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              width: { xs: '100%', lg: '587px' },
            }}
          >
            {/* Main Image */}
            <Box 
              component="img"
              src={luxury1}
              alt="Luxury Collection Main"
              sx={{
                width: '100%',
                height: { xs: 'auto', lg: '412px' },
                borderRadius: '20px',
                objectFit: 'cover'
              }}
            />
            {/* Thumbnails Row */}
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: '12px',
              }}
            >
              {[luxury2, luxury3, luxury4, luxury5].map((imgSrc, index) => (
                <Box 
                  key={index}
                  component="img"
                  src={imgSrc}
                  alt={`Luxury Collection ${index + 2}`}
                  sx={{
                    width: { xs: '22%', lg: '138px' },
                    height: { xs: 'auto', lg: '135px' },
                    borderRadius: '20px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                    transition: 'opacity 0.2s'
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Classic Collection Section */}
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
            flexDirection: { xs: 'column-reverse', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, lg: '130px' },
          }}
        >
          {/* Image Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              width: { xs: '100%', lg: '587px' },
            }}
          >
            {/* Main Image */}
            <Box 
              component="img"
              src={classic1}
              alt="Classic Collection Main"
              sx={{
                width: '100%',
                height: { xs: 'auto', lg: '412px' },
                borderRadius: '20px',
                objectFit: 'cover'
              }}
            />
            {/* Thumbnails Row */}
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: '12px',
              }}
            >
              {[classic2, classic3, classic4, classic5].map((imgSrc, index) => (
                <Box 
                  key={index}
                  component="img"
                  src={imgSrc}
                  alt={`Classic Collection ${index + 2}`}
                  sx={{
                    width: { xs: '22%', lg: '138px' },
                    height: { xs: 'auto', lg: '135px' },
                    borderRadius: '20px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 },
                    transition: 'opacity 0.2s'
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Text Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: '551px' },
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
                mb: '21px'
              }}
            >
              Classic Collection
            </Typography>
            
            <Typography 
              variant="h2"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: { xs: '22px', md: '35px' },
                lineHeight: { xs: '30px', md: '40px' },
                color: 'rgba(0, 0, 0, 1)',
                mb: '36px'
              }}
            >
              Elegant Tea Selection Gift Box.
            </Typography>
            
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '15px', md: '18px' },
                lineHeight: '22px',
                color: 'rgba(117, 117, 117, 1)',
                mb: '36px',
                textAlign: { xs: 'center', lg: 'left' }
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis
              <br /><br />
              Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum  Lorem ipsum dolor sit amet consectetur. Urna erat non sapien sagittis convallis nibh cursus varius Lorem ipsum
            </Typography>

            <Button 
              variant="contained"
              sx={{
                width: { xs: '170px', sm: '530px' },
                height: { xs: '40px', sm: '67px' },
                bgcolor: 'rgba(202, 153, 58, 1)',
                borderRadius: { xs: '9px', sm: '10px' },
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: { xs: '15px', sm: '16px' }, 
                textTransform: 'uppercase',
                color: '#fff',
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: 'rgba(180, 130, 40, 1)',
                  boxShadow: 'none'
                }
              }}
            >
              BUY NOW
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurProduct;
