import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Seo from '../components/Common/Seo';
import homeHero from '../assets/Home/HomeHero.webp';
import homePurposeImg from '../assets/Home/HomePurposeImg.webp';
import homeGlobalMap from '../assets/Home/HomeGlobalMap.webp';
import homeWhyUsImg from '../assets/Home/HomeWhyUsImg.webp';
import homeAbout from '../assets/Home/HomeAboutImg.webp';
import col1 from '../assets/Our Collection/1.webp';
import col2 from '../assets/Our Collection/2.webp';
import col3 from '../assets/Our Collection/3.webp';
import col4 from '../assets/Our Collection/4.webp';
import col5 from '../assets/Our Collection/5.webp';
import col6 from '../assets/Our Collection/6.webp';

const Home = () => {
  const [showVision, setShowVision] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Seo 
        title="Home" 
        description="Welcome to TeaLora, leading Ceylon Tea Exporters. Buy premium Ceylon tea online, including authentic Sri Lankan black tea, green tea, and luxury gift collections." 
      />
      <Box 
        sx={{
          width: '100%',
          minHeight: { xs: '90vh', sm: '90vh', lg: '100vh' },
          backgroundImage: {
            xs: `linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 108%), url(${homeHero})`,
            sm: `url(${homeHero})`
          },
          backgroundSize: { xs: ' cover', lg: '100% 100%' }, 
          backgroundPosition: { xs: '0% center', sm: '15% center', md: '20% center', lg: 'center' },
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center', // Centers vertically
          justifyContent: 'center', // Centers horizontally to constrain max-width
          overflow: 'hidden'
        }}
      >
        <Box 
          sx={{
            width: '100%',
            maxWidth: '1440px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', 
            pl: { xs: 3, sm: 6, md: 10, lg: '250px' },
            pr: { xs: 3, sm: 6, md: 10, lg: 0 },
          }}
        >
          {/* Main Title Box */}
          <Box 
            sx={{
              width: { xs: '325px', sm: '100%', md: '600px' }, 
              mb: { xs: 2, md: 3, lg: '30px' } 
            }}
          >
            <Typography 
              variant="h1"
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                fontSize: { xs: '22.47px', sm: '30px', md: '33px', lg: '35px' },
                lineHeight: { xs: '31.09px', sm: '42px', md: '48px', lg: '54px' },
                textTransform: 'uppercase',
                color: { xs: '#fff', sm: '#000' },
              }}
            >
              Authentic Ceylon Tea 
              <Box component="br" sx={{ display: { xs: 'none', sm: 'block' } }} />
              {' '}Crafted
              <Box component="span" sx={{ color: { xs: '#fff', sm: 'rgba(202, 153, 58, 1)' } }}>{" "}For The World</Box>
            </Typography>
          </Box>

          {/* Subtitle Box */}
          <Box 
            sx={{
              width: { xs: '274px', sm: '100%', md: '467px' }, 
              mb: { xs: 4, md: 5, lg: '40px' }
            }}
          >
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '9.39px', sm: '15px', md: '16px' },
                lineHeight: { xs: '14.67px', sm: '26px', md: '25px' },
                textTransform: 'capitalize',
                color: { xs: 'rgba(255, 255, 255, 0.9)', sm: '#000' },
              }}
            >
              From Sri Lanka's renowned tea gardens to the world, 
              <Box component="br" sx={{ display: { xs: 'none', sm: 'block' } }} />
              Tealora Ceylon delivers premium teas crafted with 
              <Box component="br" sx={{ display: { xs: 'none', sm: 'block' } }} /> 
              heritage, quality, and exceptional taste.
            </Typography>
          </Box>

          {/* Contact Us Button */}
          <Button 
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: { xs: '10.5px', sm: '18px' } }} />}
            sx={{
              width: { xs: '88.58px', sm: '151px' },
              height: { xs: '26.4px', sm: '45px' },
              bgcolor: 'rgba(202, 153, 58, 1)',
              borderRadius: { xs: '5.87px', sm: '10px' },
              padding: { xs: '5.87px 7.63px 6.45px 5.28px', sm: '10px 13px 11px 9px' },
              gap: { xs: '5.87px', sm: '10px' },
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: { xs: '6.5px', sm: '14px' }, 
              textTransform: 'uppercase',
              color: '#fff',
              boxShadow: 'none',
              '&:hover': {
                bgcolor: 'rgba(180, 130, 40, 1)',
                boxShadow: 'none'
              },
              alignSelf: 'flex-start'
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          py: { xs: 5, md: 12 }, 
          bgcolor: '#fff' 
        }}
      >
        <Box 
          sx={{
            width: '100%',
            maxWidth: '1440px',
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'row' },
            alignItems: { xs: 'center', sm: 'center', lg: 'flex-start' },
            justifyContent: 'center',
            gap: { xs: 2, sm: 4, lg: '92px' },
            px: { xs: 3, sm: 4, lg: '120px' },
          }}
        >
          {/* About Image */}
          <Box 
            component="img"
            src={homeAbout}
            alt="About Tealora"
            sx={{
              width: { xs: '100%', sm: '45%', lg: '473px' },
              height: { xs: 'auto', lg: '100%' },
              borderRadius: '30px',
              objectFit: 'cover'
            }}
          />

          {/* About Text Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', sm: '55%', lg: '635px' },
              gap: { xs: '24px', sm: '36px' },
              textAlign: { xs: 'center', sm: 'left' },
              alignItems: { xs: 'center', sm: 'flex-start' }
            }}
          >
            <Box>
              <Typography 
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: '15px', md: '22px',lg: '20px' },
                  lineHeight: { xs: '22px', md: '22px' },
                  color: 'rgba(202, 153, 58, 1)',
                  mb: 1
                }}
              >
                About Tealora
              </Typography>
              <Typography 
                variant="h2"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: '22px', md: '35px' },
                  lineHeight: { xs: '30px', md: '40px' },
                  color: 'rgba(0, 0, 0, 1)'
                }}
              >
                A Heritage of Premium Ceylon Tea Excellence
              </Typography>
            </Box>

            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '15px', md: '18px' },
                lineHeight: '22px',
                color: 'rgba(117, 117, 117, 1)'
              }}
            >
              At Tealora Ceylon, every tea leaf tells the story of Sri Lanka's rich tea growing tradition. We carefully source the finest Ceylon teas from renowned estates, combining generations of expertise with modern quality standards to create products enjoyed around the world.
              <br /><br />
              Whether you're looking for premium loose-leaf tea, elegant gift collections we are committed to delivering excellence in every package.
            </Typography>

            {/* Learn More Button */}
            <Button 
              variant="contained"
              onClick={() => navigate('/about')}
              sx={{
                width: { xs: '170px', sm: '209px' },
                height: { xs: '40px', sm: '61px' },
                bgcolor: 'rgba(202, 153, 58, 1)',
                borderRadius: { xs: '11px', sm: '20px' },
                padding: { xs: '9px 12px', sm: '16px 21px 16px 18px' },
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: { xs: '15px', sm: '16px' }, 
                textTransform: 'capitalize',
                color: '#fff',
                boxShadow: 'none',
                '&:hover': {
                  bgcolor: 'rgba(180, 130, 40, 1)',
                  boxShadow: 'none'
                },
                alignSelf: { xs: 'center', sm: 'flex-start' }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Our Collections Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(255, 246, 232, 1)', 
          height: { lg: 'auto' },
          minHeight: { lg: '626px' },
          py: { xs: 5, md: 8, lg: 8 },
          px: { xs: 2, sm: 4, lg: 0 }
        }}
      >
        <Typography 
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '22px',
            color: 'rgba(202, 153, 58, 1)',
            textAlign: 'center',
            mb: '12px'
          }}
        >
          Our Collections
        </Typography>

        <Typography 
          variant="h2"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '25px',
            lineHeight: '30px',
            color: 'rgba(0, 0, 0, 1)',
            textAlign: 'center',
            mb: { xs: 4, lg: '49px' }
          }}
        >
          Discover Our Premium Tea Range
        </Typography>

        {/* Desktop Carousel */}
        <Box 
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'nowrap',
            width: '100%',
            overflowX: 'auto',
            pl: { xs: 2, sm: 4, md: '60px', lg: 'max(119px, calc((100vw - 1440px) / 2 + 119px))' },
            pr: { xs: 2, sm: 4, lg: '20px' },
            pb: 2,
            /* Hide scrollbar */
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {[
            { img: col1, label: 'Signature Collection', id: 'signature' },
            { img: col2, label: 'Wellness Collection', id: 'wellness' },
            { img: col3, label: 'Discovery Collection', id: 'discovery' },
            { img: col4, label: 'Premium Collection', id: 'royal' },
            { img: col5, label: 'Luxury Collection', id: 'heritage' },
            { img: col6, label: 'Mini Gift Collection', id: 'mini' }
          ].map((item, index) => (
            <Box 
              key={index}
              onClick={() => navigate('/products#' + item.id)}
              sx={{
                position: 'relative',
                flex: '0 0 auto',
                width: { sm: '260px', md: '250px', lg: '357px' },
                height: { sm: '260px', md: '280px', lg: '320px' },
                borderRadius: '15px',
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover .overlay': {
                  bgcolor: 'rgba(0, 0, 0, 0.4)'
                }
              }}
            >
              <Box 
                component="img"
                src={item.img}
                alt={item.label}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <Box 
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  bgcolor: 'rgba(0, 0, 0, 0.3)',
                  transition: 'background-color 0.3s ease',
                  zIndex: 1
                }}
              />
              <Box 
                sx={{
                  position: 'absolute',
                  bottom: '25px', 
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '295px',
                  height: '43px',
                  bgcolor: 'rgba(202, 153, 58, 1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '14px',
                  textAlign: 'center',
                  zIndex: 2,
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(180, 130, 40, 1)'
                  }
                }}
              >
                {item.label}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Mobile Swiper */}
        <Box 
          sx={{
            width: '100%',
            display: { xs: 'block', sm: 'none' },
            '& .swiper-pagination-bullet-active': {
              backgroundColor: 'rgba(202, 153, 58, 1)'
            },
            '& .swiper-slide': {
              display: 'flex',
              justifyContent: 'center'
            }
          }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            style={{ paddingBottom: '40px' }}
          >
            {[
              { img: col1, label: 'Signature Collection', id: 'signature' },
              { img: col2, label: 'Wellness Collection', id: 'wellness' },
              { img: col3, label: 'Discovery Collection', id: 'discovery' },
              { img: col4, label: 'Premium Collection', id: 'royal' },
              { img: col5, label: 'Luxury Collection', id: 'heritage' },
              { img: col6, label: 'Mini Gift Collection', id: 'mini' }
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <Box 
                  onClick={() => navigate('/products#' + item.id)}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: { xs: '250px', sm: '300px' },
                    height: { xs: '250px', sm: '300px' },
                    borderRadius: '15px',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  <Box 
                    component="img"
                    src={item.img}
                    alt={item.label}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <Box 
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      bgcolor: 'rgba(0, 0, 0, 0.3)',
                      transition: 'background-color 0.3s ease',
                      zIndex: 1
                    }}
                  />
                  <Box 
                    sx={{
                      position: 'absolute',
                      bottom: '25px', 
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: { xs: '220px', sm: '260px' },
                      maxWidth: '90%',
                      height: { xs: '35px', sm: '43px' },
                      bgcolor: 'rgba(202, 153, 58, 1)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: { xs: '12px', sm: '14px' },
                      textAlign: 'center',
                      zIndex: 2
                    }}
                  >
                    {item.label}
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      {/* Our Purpose Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#ffffff', 
          py: { xs: 5, md: 12 },
          px: { xs: 2, sm: 4, lg: 0 }
        }}
      >
        <Box 
          sx={{
            width: '100%',
            maxWidth: '1440px',
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 4, lg: 6 },
            px: { xs: 0, lg: '120px' } 
          }}
        >
          {/* Top Row: Text and Buttons */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', lg: 'flex-end' },
              gap: { xs: 2, lg: 0 }
            }}
          >
            {/* Text Side */}
            <Box sx={{ width: { xs: '100%', lg: '632px' }, textAlign: { xs: 'center', lg: 'left' }, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', lg: 'flex-start' } }}>
              <Typography 
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: '15px', md: '22px',lg: '20px' },
                  lineHeight: '22px',
                  color: 'rgba(202, 153, 58, 1)',
                  mb: 1
                }}
              >
                Our Purpose
              </Typography>
              <Typography 
                variant="h2"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: '22px', md: '35px' },
                  lineHeight: { xs: '30px', md: '40px' },
                  color: 'rgba(0, 0, 0, 1)',
                  mb: 2
                }}
              >
                Driven by Purpose, Inspired by Excellence
              </Typography>
              <Typography 
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: { xs: '15px', md: '18px' },
                  lineHeight: '22px',
                  color: 'rgba(117, 117, 117, 1)',
                  maxWidth: '612px'
                }}
              >
                Discover the vision and mission that guide Tealora Ceylon in delivering authentic premium tea to customers across the globe.
              </Typography>
            </Box>

            {/* Buttons Side */}
            <Box 
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', lg: 'flex-start' },
                gap: 2
              }}
            >
              <Button 
                onClick={() => navigate('/sustainability')}
                variant="contained"
                sx={{
                  width: { xs: '170px', sm: '164px' },
                  height: { xs: '40px', sm: '61px' },
                  bgcolor: 'rgba(202, 153, 58, 1)',
                  borderRadius: { xs: '11px', sm: '20px' },
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '15px', sm: '16px' }, 
                  textTransform: 'capitalize',
                  color: '#fff',
                  boxShadow: 'none',
                  '&:hover': {
                    bgcolor: 'rgba(180, 130, 40, 1)',
                    boxShadow: 'none'
                  }
                }}
              >
                Learn More
              </Button>
              <Box 
                onClick={() => navigate('/sustainability')}
                sx={{
                  width: { xs: '35px', sm: '60px' },
                  height: { xs: '35px', sm: '60px' },
                  bgcolor: '#000',
                  borderRadius: { xs: '18px', sm: '30px' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  '&:hover': { bgcolor: '#333' }
                }}
              >
                <ArrowForwardIcon sx={{ color: '#fff', fontSize: { xs: '14px', sm: '24px' } }} />
              </Box>
            </Box>
          </Box>

          {/* Bottom Row: Image and Black Box */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              gap: { xs: 3, lg: '28px' },
              justifyContent: 'space-between'
            }}
          >
            {/* Image Box */}
            <Box 
              sx={{
                position: 'relative',
                width: { xs: '100%', lg: '590px' },
                height: { xs: 'auto', sm: '400px', lg: '318px' },
                borderRadius: '20px',
                display: 'flex'
              }}
            >
              <Box 
                component="img"
                src={homePurposeImg}
                alt="Our Purpose"
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  objectFit: 'cover'
                }}
              />
              <Box 
                sx={{
                  position: 'absolute',
                  bottom: { xs: '15px', lg: '10px' }, 
                  right: { xs: '5px', lg: '10px' }, 
                  width: { xs: '120px', sm: '147px' },
                  height: '54px',
                  bgcolor: 'rgba(202, 153, 58, 1)',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: '14px',
                  textAlign: 'center',
                  px: 2
                }}
              >
                Premium <br /> Ceylon Tea
              </Box>
            </Box>

            {/* Black Mission Box */}
            <Box 
              sx={{
                width: { xs: '100%', lg: '582px' },
                height: { xs: 'auto', lg: '318px' },
                bgcolor: '#000',
                borderRadius: '20px',
                p: { xs: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: { xs: 'center', lg: 'left' }
              }}
            >
              <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: showVision ? 'center' : 'flex-start', mb: { xs: 4, lg: 0 } }}>
                <Typography 
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: '22px',
                    color: '#fff',
                    textAlign: showVision ? 'center' : { xs: 'center', lg: 'left' }
                  }}
                >
                  {showVision ? (
                    "To become a globally recognized premium Ceylon tea brand"
                  ) : (
                    "To source the finest Ceylon tea from Sri Lanka's renowned tea gardens and craft premium products that combine tradition, quality, and elegant packaging. We are committed to building lasting partnerships by providing exceptional service, reliable export solutions, and memorable tea experiences for customers around the world."
                  )}
                </Typography>
              </Box>
              
              <Box 
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'center', sm: 'flex-end' },
                  gap: { xs: 2, sm: 0 }
                }}
              >
                <Typography 
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: { xs: '20px', md: '22px' },
                    color: 'rgba(202, 153, 58, 1)'
                  }}
                >
                  {showVision ? "Our Vision" : "Our Mission"}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box 
                    onClick={() => setShowVision(!showVision)}
                    sx={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      bgcolor: !showVision ? 'rgba(202, 153, 58, 1)' : 'transparent',
                      border: !showVision ? 'none' : '1px solid #fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      '&:hover': { bgcolor: !showVision ? 'rgba(180, 130, 40, 1)' : 'rgba(255,255,255,0.1)' },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <ArrowBackIcon sx={{ color: '#fff', fontSize: '18px' }} />
                  </Box>
                  <Box 
                    onClick={() => setShowVision(!showVision)}
                    sx={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      bgcolor: showVision ? 'rgba(202, 153, 58, 1)' : 'transparent',
                      border: showVision ? 'none' : '1px solid #fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      '&:hover': { bgcolor: showVision ? 'rgba(180, 130, 40, 1)' : 'rgba(255,255,255,0.1)' },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <ArrowForwardIcon sx={{ color: '#fff', fontSize: '18px' }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Global Presence Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#ffffff', 
          px: { xs: 2, sm: 4, lg: 0 }
        }}
      >
        <Box 
          sx={{
            width: '100%',
            maxWidth: '1440px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: { xs: 0, lg: '120px' }
          }}
        >
          {/* Top Titles */}
          <Typography 
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: { xs: '15px', md: '22px',lg: '20px' },
              lineHeight: '22px',
              color: 'rgba(202, 153, 58, 1)',
              mb: 1,
              textAlign: 'center'
            }}
          >
            Global Presence
          </Typography>
          <Typography 
            variant="h2"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: { xs: '22px', md: '25px' },
              lineHeight: '30px',
              color: 'rgba(0, 0, 0, 1)',
              mb: { xs: 2, md: 4 },
              textAlign: 'center',
              maxWidth: '391px'
            }}
          >
            Sharing the Finest Ceylon Tea Across the World
          </Typography>

          {/* Bottom Content Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              gap: { xs: 4, sm: 4, lg: '58px' }
            }}
          >
            {/* Text and Button */}
            <Box 
              sx={{
                width: { xs: '100%', sm: '40%', lg: '454px' },
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '24px', sm: '36px' },
                textAlign: { xs: 'center', sm: 'left' },
                alignItems: { xs: 'center', sm: 'flex-start' }
              }}
            >
              <Typography 
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: { xs: '15px', md: '18px' },
                  lineHeight: '22px',
                  color: 'rgba(117, 117, 117, 1)'
                }}
              >
                Tealora proudly partners with international distributors, retailers, hotels, cafés, and specialty stores to deliver authentic Ceylon tea worldwide. Our efficient export solutions, consistent quality, and flexible packaging options make us a trusted supplier for global markets.
              </Typography>
            </Box>

            {/* Image (Map) */}
            <Box 
              sx={{
                width: { xs: '100%', sm: '55%', lg: '688px' },
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box 
                component="img"
                src={homeGlobalMap}
                alt="Global Presence Map"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
          </Box>
        </Box>
      </Box>
    </Box>

      {/* Why Choose Tealora Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#ffffff', 
          py: { xs: 5, md: 12 },
          px: { xs: 2, sm: 4, lg: 0 }
        }}
      >
        <Box 
          sx={{
            width: '100%',
            maxWidth: '1440px',
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'row' },
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: { xs: 4, sm: 4, lg: '95px' },
            px: { xs: 0, lg: '120px' }
          }}
        >
          {/* Image Box */}
          <Box 
            sx={{
              width: { xs: '100%', sm: '40%', lg: '473px' },
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box 
              component="img"
              src={homeWhyUsImg}
              alt="Why Choose Tealora"
              sx={{
                width: '100%',
                height: { xs: 'auto', lg: '449px' },
                borderRadius: '30px',
                objectFit: 'cover'
              }}
            />
          </Box>

          {/* Text Box */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', sm: '55%', lg: '632px' },
              gap: { xs: '24px', sm: '36px' },
              textAlign: { xs: 'center', sm: 'left' },
              alignItems: { xs: 'center', sm: 'flex-start' }
            }}
          >
            <Box>
              <Typography 
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: '15px', md: '22px',lg: '20px' },
                  lineHeight: '22px',
                  color: 'rgba(202, 153, 58, 1)',
                  mb: 1
                }}
              >
                Why Choose Tealora
              </Typography>
              <Typography 
                variant="h2"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: '22px', md: '35px' },
                  lineHeight: { xs: '30px', md: '40px' },
                  color: 'rgba(0, 0, 0, 1)'
                }}
              >
                Trusted Quality. Sustainable Sourcing. Global Standards.
              </Typography>
            </Box>

            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '15px', md: '18px' },
                lineHeight: '22px',
                color: 'rgba(117, 117, 117, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: 3 // Margin between paragraphs
              }}
            >
              <span>
                From handpicked tea leaves to beautifully finished products, every stage of our process reflects our dedication to quality. We work closely with trusted tea estates while maintaining rigorous quality assurance and environmentally responsible practices to deliver products our global customers can rely on.
              </span>
              <span>
                Our commitment extends beyond exceptional tea - we strive to preserve Sri Lanka's rich tea heritage while embracing innovation, sustainable sourcing, and elegant packaging that creates a memorable experience in every cup.
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>

    </>
  );
};

export default Home;
