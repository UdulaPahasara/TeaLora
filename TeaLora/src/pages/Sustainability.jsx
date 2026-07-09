import React, { useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import Seo from '../components/Common/Seo';
import susHero from '../assets/Sustainability/SusHero.webp';
import ourCommit from '../assets/Sustainability/ourCommit.webp';
import responsible from '../assets/Sustainability/responsible.webp';
import eco from '../assets/Sustainability/eco.webp';
import supporting from '../assets/Sustainability/supporting.webp';
import enviromental from '../assets/Sustainability/enviromental.webp';
import health from '../assets/Sustainability/health.webp';
import promise1 from '../assets/Sustainability/promise1.webp';
import promise2 from '../assets/Sustainability/promise2.webp';
import promise3 from '../assets/Sustainability/promise3.webp';

const Sustainability = () => {
  const scrollContainerRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      // Card width (280px) + gap (20px) = 300px
      const cardWidth = 300;
      const index = Math.round(scrollLeft / cardWidth);
      if (index >= 0 && index <= 4 && index !== activeCardIndex) {
        setActiveCardIndex(index);
      }
    }
  };

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = 300;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveCardIndex(index);
    }
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
      <Seo title="Sustainability" description="At Tealora Ceylon, sustainability is at the heart of everything we do. From responsibly sourced tea leaves to eco-conscious practices, we are committed to protecting nature while delivering authentic Ceylon tea to the world." />
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '250px', sm: '300px', md: '370px' },
          backgroundImage: `url("${susHero}")`,
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
            fontSize: { xs: '35px', sm: '50px', md: '62.41px' },
            lineHeight: { xs: '50px', sm: '65px', md: '82.7px' },
            textTransform: 'uppercase',
            color: '#FFFFFF',
            mb: 2,
            maxWidth: '546px',
          }}
        >
          SUSTAINABILITY
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
          At Tealora Ceylon, sustainability is at the heart of everything we do. From responsibly sourced tea leaves to eco-conscious practices, we are committed to protecting nature while delivering authentic Ceylon tea to the world.
        </Typography>
      </Box>

      {/* Our Commitment Section */}
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
            gap: { xs: 4, lg: '80px' },
          }}
        >
          {/* Image Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: '530px' },
            }}
          >
            <Box 
              component="img"
              src={ourCommit}
              alt="Our Commitment"
              sx={{
                width: '100%',
                height: { xs: 'auto', lg: '450px' },
                borderRadius: '30px',
                objectFit: 'cover'
              }}
            />
          </Box>

          {/* Text Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: '653px' },
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
                mb: '36px'
              }}
            >
              Growing Responsibly for a Better Tomorrow
            </Typography>
            
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '15px', md: '18px' },
                lineHeight: { xs: '22px', md: '25px' },
                color: 'rgba(117, 117, 117, 1)',
                textAlign: { xs: 'center', lg: 'left' }
              }}
            >
              Sustainability is more than a responsibility, it's a promise. At Tealora Ceylon, we work closely with trusted Sri Lankan tea estates to source premium tea through environmentally responsible practices. By preserving natural resources, supporting local communities, and maintaining exceptional quality standards, we ensure every cup reflects our commitment to people, nature, and future generations.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Our Sustainability Pillars Section */}
      <Box 
        component="section"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          py: { xs: 5, md: 10, lg: '80px' }, 
          px: { xs: 2, sm: 4, lg: 5 },
          bgcolor: '#FDF7F1'
        }}
      >
        <Box 
          sx={{
            width: '100%',
            maxWidth: '1440px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography 
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: '22px',
              color: 'rgba(202, 153, 58, 1)',
              mb: 1
            }}
          >
            Our Sustainability Pillars
          </Typography>
          
          <Typography 
            variant="h2"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: { xs: '22px', md: '35px' },
              lineHeight: { xs: '30px', md: '40px' },
              color: 'rgba(0, 0, 0, 1)',
              mb: '48px',
              textAlign: 'center'
            }}
          >
            Building a Sustainable Future Together
          </Typography>

          {/* Cards Container */}
          <Box 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              justifyContent: { xs: 'flex-start', xl: 'center' },
              gap: '20px',
              width: '100%',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              pb: 2,
              px: { xs: 2, md: 4, xl: 0 },
              '&::-webkit-scrollbar': {
                display: 'none'
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {/* Card 1 */}
            <Box 
              sx={{
                flex: '0 0 auto',
                width: { xs: '280px', lg: '285px' },
                height: { xs: 'auto', lg: '358px' },
                scrollSnapAlign: 'start',
                bgcolor: '#ffffff',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: '30px 20px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              <Box 
                sx={{
                  width: '56.69px',
                  height: '56.69px',
                  borderRadius: '50%',
                  bgcolor: '#F5F5F5',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: '30px'
                }}
              >
                <Box component="img" src={responsible} alt="Responsible Sourcing" sx={{ width: '24px', height: '24px' }} />
              </Box>
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '18px', mb: '15px', textAlign: 'center' }}>
                Responsible Sourcing
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '16px', color: 'rgba(117, 117, 117, 1)', textAlign: 'center' }}>
                We carefully select tea from trusted Sri Lankan estates that follow responsible farming and quality-focused cultivation practices.
              </Typography>
            </Box>

            {/* Card 2 */}
            <Box 
              sx={{
                flex: '0 0 auto',
                width: { xs: '280px', lg: '285px' },
                height: { xs: 'auto', lg: '358px' },
                scrollSnapAlign: 'start',
                bgcolor: '#ffffff',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: '30px 20px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              <Box 
                sx={{
                  width: '56.69px',
                  height: '56.69px',
                  borderRadius: '50%',
                  bgcolor: '#F5F5F5',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: '30px'
                }}
              >
                <Box component="img" src={eco} alt="Eco-Friendly Packaging" sx={{ width: '24px', height: '24px' }} />
              </Box>
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '18px', mb: '15px', textAlign: 'center' }}>
                Eco-Friendly Packaging
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '16px', color: 'rgba(117, 117, 117, 1)', textAlign: 'center' }}>
                Our premium packaging is thoughtfully designed using environmentally conscious materials wherever possible without compromising luxury.
              </Typography>
            </Box>

            {/* Card 3 */}
            <Box 
              sx={{
                flex: '0 0 auto',
                width: { xs: '280px', lg: '285px' },
                height: { xs: 'auto', lg: '358px' },
                scrollSnapAlign: 'start',
                bgcolor: '#ffffff',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: '30px 20px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              <Box 
                sx={{
                  width: '56.69px',
                  height: '56.69px',
                  borderRadius: '50%',
                  bgcolor: '#F5F5F5',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: '30px'
                }}
              >
                <Box component="img" src={supporting} alt="Supporting Communities" sx={{ width: '24px', height: '24px' }} />
              </Box>
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '18px', mb: '15px', textAlign: 'center' }}>
                Supporting Communities
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '16px', color: 'rgba(117, 117, 117, 1)', textAlign: 'center' }}>
                We value the people behind every harvest by fostering ethical partnerships and contributing to the long-term growth of local tea-growing communities.
              </Typography>
            </Box>

            {/* Card 4 */}
            <Box 
              sx={{
                flex: '0 0 auto',
                width: { xs: '280px', lg: '285px' },
                height: { xs: 'auto', lg: '358px' },
                scrollSnapAlign: 'start',
                bgcolor: '#ffffff',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: '30px 20px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              <Box 
                sx={{
                  width: '56.69px',
                  height: '56.69px',
                  borderRadius: '50%',
                  bgcolor: '#F5F5F5',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: '30px'
                }}
              >
                <Box component="img" src={enviromental} alt="Environmental Care" sx={{ width: '24px', height: '24px' }} />
              </Box>
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '18px', mb: '15px', textAlign: 'center' }}>
                Environmental Care
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '16px', color: 'rgba(117, 117, 117, 1)', textAlign: 'center' }}>
                We continuously improve our processes to reduce waste, protect natural resources, and promote sustainable manufacturing across our operations.
              </Typography>
            </Box>

            {/* Card 5 */}
            <Box 
              sx={{
                flex: '0 0 auto',
                width: { xs: '280px', lg: '285px' },
                height: { xs: 'auto', lg: '358px' },
                scrollSnapAlign: 'start',
                bgcolor: '#ffffff',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: '30px 20px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              <Box 
                sx={{
                  width: '56.69px',
                  height: '56.69px',
                  borderRadius: '50%',
                  bgcolor: '#F5F5F5',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: '30px'
                }}
              >
                <Box component="img" src={health} alt="Health & Wellness" sx={{ width: '24px', height: '24px' }} />
              </Box>
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '18px', mb: '15px', textAlign: 'center' }}>
                Health & Wellness
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, fontSize: '16px', color: 'rgba(117, 117, 117, 1)', textAlign: 'center' }}>
                Our carefully crafted teas are made from premium natural ingredients, providing a wholesome and refreshing experience while supporting everyday wellness and balanced living.
              </Typography>
            </Box>
          </Box>

          {/* Pagination Dots */}
          <Box 
            sx={{ 
              display: { xs: 'flex', xl: 'none' }, 
              justifyContent: 'center', 
              gap: '8px',
              mt: 1
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Box 
                key={i}
                onClick={() => scrollToCard(i)}
                sx={{
                  width: activeCardIndex === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '10px',
                  bgcolor: 'rgba(202, 153, 58, 1)',
                  opacity: activeCardIndex === i ? 1 : 0.4,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Our Promise Section */}
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
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, lg: '69px' },
          }}
        >
          {/* Text Area */}
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: { xs: '100%', lg: '537px' },
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
              Our Promise
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
              Preserving Sri Lanka's Tea Heritage for Future Generations
            </Typography>
            
            <Typography 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 400,
                fontSize: { xs: '15px', md: '18px' },
                lineHeight: '22px',
                color: 'rgba(117, 117, 117, 1)',
                textAlign: { xs: 'center', lg: 'left' }
              }}
            >
              Every Tealora product represents our dedication to quality, sustainability, and authenticity. By combining traditional craftsmanship with responsible innovation, we create premium Ceylon tea that respects the environment while delivering exceptional experiences to customers worldwide.
              <br /><br />
              Together with our growers, partners, and customers, we remain committed to building a more sustainable future, one cup of Ceylon tea at a time.
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
                src={promise1}
                alt="Our Promise 1"
                sx={{
                  width: '100%',
                  height: { xs: 'calc(182px / 387px * 100%)', lg: '182px' },
                  borderRadius: { xs: '15px', sm: '30px' },
                  objectFit: 'cover'
                }}
              />
              <Box 
                component="img"
                src={promise2}
                alt="Our Promise 2"
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
              src={promise3}
              alt="Our Promise 3"
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

export default Sustainability;
