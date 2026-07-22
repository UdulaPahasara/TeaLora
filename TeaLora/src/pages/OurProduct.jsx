import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Seo from '../components/Common/Seo';
import ourProductHero from '../assets/OurProduct/ourProduct hero.webp';
import col1 from '../assets/Our Collection/1.webp';
import col2 from '../assets/Our Collection/2.webp';
import col3 from '../assets/Our Collection/3.webp';
import col4 from '../assets/Our Collection/4.webp';
import col5 from '../assets/Our Collection/5.webp';
import col6 from '../assets/Our Collection/6.webp';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const collections = [
  {
    id: 'signature',
    subtitle: 'Signature Collection',
    title: 'The Essence of Ceylon.',
    image: col1,
    reverse: false,
    list: [
      'Gourmet Tea gift box',
      'Premium Ceylon Black Tea',
      'Premium Green Tea',
      'Silver White Tea',
      'Ceylon Gold OP Tea'
    ],
    extras: [
      {
        heading: 'Packaging',
        items: ['Luxury Rigid Box', 'Vintage Sri Lanka Artwork', 'Gold Map Print']
      }
    ]
  },
  {
    id: 'wellness',
    subtitle: 'Wellness Collection',
    title: 'Tea for Mind, Body & Soul.',
    image: col2,
    reverse: true,
    list: [
      'Green Tea',
      'Lemongrass',
      'Chamomile',
      'Tealora Blue Tea',
      'Ginger Tea',
      'Cinnamon Tea',
      'Moringa Tea',
      'Lemon Sour Tea',
      'Soursop Tea',
      'Hibiscus Tea'
    ]
  },
  {
    id: 'discovery',
    subtitle: 'Discovery Collection',
    title: 'Discover the Flavors of Ceylon.',
    image: col3,
    reverse: false,
    preText: 'Mini Tea Canisters',
    list: [
      'Black Tea',
      'Green Tea',
      'White Tea'
    ],
    postText: 'Perfect for first-time customers.'
  },
  {
    id: 'royal',
    subtitle: 'Royal Reserve Collection',
    title: 'Crafted for the Extraordinary.',
    image: col4,
    reverse: true,
    list: [
      'Golden Tips',
      'Silver Tips',
      'Single Estate Black Tea'
    ]
  },
  {
    id: 'heritage',
    subtitle: 'Heritage Collection',
    title: 'A Journey Through Ceylon Tea Regions.',
    image: col5,
    reverse: false,
    preText: "A refined collection inspired by Sri Lanka's iconic tea-growing regions, bringing together distinct flavours, rich aromas, and generations of tea-making traditions in every cup.",
    customList: [
      'Nuwara Eliya – Light, floral, delicate',
      'Uva – Bright, aromatic, lively',
      'Dimbula – Smooth, balanced, refreshing',
      'Kandy – Rich, full-bodied'
    ]
  },
  {
    id: 'mini',
    subtitle: 'Mini Gift Collection',
    title: 'A Thoughtful Gift, Perfectly Packed.',
    image: col6,
    reverse: true,
    list: [
      'Premium Ceylon Tea',
      'Gourmet Cashew Delight',
      'Elegant Gift Packaging'
    ]
  }
];

const OurProduct = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Adding a slight delay to ensure layout is complete
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - 100; // 100px offset for navbar
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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
      <Seo title="Our Products" description="Explore TeaLora's premium tea gift collections. Choose from our Signature, Luxury, and Classic boxes. Perfect for corporate tea gifts and luxury tea gift boxes." />
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

      {/* Collections Mapping */}
      {collections.map((coll, idx) => (
        <Box 
          key={coll.id}
          id={coll.id}
          component="section"
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            py: { xs: 3, md: 5, lg: '50px' }, 
            px: { xs: 2, sm: 4, lg: 0 },
            bgcolor: '#ffffff'
          }}
        >
          <Box 
            sx={{
              width: '100%',
              maxWidth: '1200px',
              display: 'flex',
              flexDirection: { 
                xs: 'column', 
                sm: coll.reverse ? 'row-reverse' : 'row' 
              },
              alignItems: { xs: 'flex-start', sm: 'stretch' },
              justifyContent: 'space-between',
              gap: { xs: 3, sm: 3, md: '32px', lg: '60px' },
            }}
          >
            {/* Image Area */}
            <Box 
              sx={{
                width: { xs: '100%', sm: '46%', md: '46%', lg: '490px' },
                flexShrink: 0,
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <Box 
                component="img"
                src={coll.image}
                alt={coll.title}
                sx={{
                  width: '100%',
                  display: 'block',
                  height: { xs: 'auto', sm: '100%', md: '100%', lg: '400px' },
                  minHeight: { xs: '220px', sm: '240px', md: '340px' },
                  borderRadius: '20px',
                  objectFit: 'cover'
                }}
              />
            </Box>


            {/* Text Area */}
            <Box 
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                width: { xs: '100%', sm: 'auto' },
                height: { lg: '400px' },
                textAlign: { xs: 'center', sm: 'left' },
                alignItems: { xs: 'center', sm: 'flex-start' },
                justifyContent: 'center',
                overflow: { xs: 'visible', sm: 'visible', md: 'visible', lg: 'hidden' },
              }}
            >
              <Typography 
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 600,
                  fontSize: { xs: '14px', sm: '12px', md: '14px', lg: '13px' },
                  color: 'rgba(202, 153, 58, 1)',
                  mb: { xs: 1, sm: 0.5, lg: 0.5 }
                }}
              >
                {coll.subtitle}
              </Typography>
              
              <Typography 
                variant="h2"
                sx={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '24px', sm: '18px', md: '22px', lg: '24px' },
                  lineHeight: { xs: '32px', sm: '24px', md: '30px', lg: '44px' },
                  color: 'rgba(0, 0, 0, 1)',
                  mb: { xs: 2, sm: 1.5, lg: 0.5 }
                }}
              >
                {coll.title}
              </Typography>
              
              {coll.preText && (
                <Typography 
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: { xs: '14px', sm: '12px', md: '13px', lg: '18px' },
                    color: '#757575',
                    mb: { xs: 1.5, sm: 1, lg: 4 }
                  }}
                >
                  {coll.preText}
                </Typography>
              )}

              {coll.list && (
                <Box component="ul" sx={{ paddingLeft: { xs: 0, sm: '20px' }, listStyleType: { xs: 'none', sm: 'disc' }, listStylePosition: { xs: 'inside', sm: 'outside' }, margin: 0, mb: { xs: 2, sm: 1.5, lg: 1.5 } }}>
                  {coll.list.map((item, i) => (
                    <Typography 
                      component="li" 
                      key={i}
                      sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: '14px', sm: '12px', md: '13px', lg: '12px' },
                        color: '#757575',
                        lineHeight: { lg: '18px' },
                        mb: { xs: 0.4, sm: 0.25, lg: 0.3 }
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              )}

              {coll.customList && (
                <Box sx={{ mb: { xs: 2, sm: 1.5, lg: 1.5 } }}>
                  {coll.customList.map((item, i) => (
                    <Typography 
                      key={i}
                      sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: '14px', sm: '12px', md: '13px', lg: '12px' },
                        color: '#757575',
                        lineHeight: { lg: '18px' },
                        mb: { xs: 0.4, sm: 0.25, lg: 0.3 }
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              )}

              {coll.extras && coll.extras.map((extra, i) => (
                <Box key={i} sx={{ mb: { xs: 2, sm: 1.5, lg: 1.5 } }}>
                  <Typography 
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                      fontSize: { xs: '14px', sm: '12px', md: '13px', lg: '13px' },
                      color: '#000',
                      mb: { xs: 0.75, sm: 0.5, lg: 0.95 }
                    }}
                  >
                    {extra.heading}
                  </Typography>
                  <Box component="ul" sx={{ paddingLeft: { xs: 0, sm: '20px' }, listStyleType: { xs: 'none', sm: 'disc' }, listStylePosition: { xs: 'inside', sm: 'outside' }, margin: 0 }}>
                    {extra.items.map((item, j) => (
                      <Typography 
                        component="li" 
                        key={j}
                        sx={{
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 400,
                          fontSize: { xs: '14px', sm: '12px', md: '13px', lg: '12px' },
                          color: '#757575',
                          lineHeight: { lg: '18px' },
                          mb: { xs: 0.4, sm: 0.25, lg: 0.5 }
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}

              {coll.postText && (
                <Typography 
                  sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: { xs: '14px', sm: '12px', md: '13px', lg: '12px' },
                    color: '#000',
                    mb: { xs: 2, sm: 1.5, lg: 1.5 }
                  }}
                >
                  {coll.postText}
                </Typography>
              )}

              <Button 
                variant="contained"
                onClick={() => {
                  const message = encodeURIComponent(`Hi, I'm interested in ${coll.subtitle}. Could you please provide me the price and more details?`);
                  window.open(`https://wa.me/94707372773?text=${message}`, '_blank');
                }}
                sx={{
                  width: { xs: '180px', sm: '100%', md: '100%', lg: '100%' },
                  height: { xs: '45px', sm: '46px', md: '48px', lg: '50px' },
                  flexShrink: 0,
                  bgcolor: 'rgba(202, 153, 58, 1)',
                  borderRadius: '10px',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '14px', sm: '12px', lg: '15px' }, 
                  textTransform: 'uppercase',
                  color: '#fff',
                  boxShadow: 'none',
                  mt: { xs: 2, sm: 2, lg: 3,md:0.5 },
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
      ))}

    </Box>
  );
};

export default OurProduct;
