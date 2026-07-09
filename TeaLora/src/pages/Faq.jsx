import React, { useState } from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import Seo from '../components/Common/Seo';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Reusing ContactUs hero image as a placeholder for FAQ hero
import faqHero from '../assets/FAQ/faqHero.webp';

const faqs = [
  {
    question: "What types of tea does Tealora Ceylon offer?",
    answer: "We offer a premium range of authentic Ceylon teas, including Black Tea, Green Tea, White Tea, Cinnamon Tea, Ginger Tea, Moringa Tea, and carefully curated luxury gift collections."
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => () => {
    setExpanded(expanded === panel ? false : panel);
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
      <Seo title="FAQ" description="Find answers about TeaLora's premium Ceylon tea varieties, including white tea, cinnamon tea, ginger tea, and moringa tea. Learn about our export services." />
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '250px', sm: '300px', md: '370px' },
          backgroundImage: `url("${faqHero}")`,
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
          FAQS
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: { xs: '14px', sm: '15px', md: '17px' },
            lineHeight: { xs: '20px', sm: '20px', md: '20px' },
            color: 'rgba(255, 255, 255, 1)',
            maxWidth: '488px',
          }}
        >
          Find answers to the most frequently asked questions about our premium Ceylon tea, gift collections, export services, and customer support.
        </Typography>
      </Box>

      {/* FAQ Accordion Section */}
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
            maxWidth: '876px', // "major Box of questions width: 876"
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          {faqs.map((faq, index) => {
            const isExpanded = expanded === index;
            return (
              <Box 
                key={index}
                sx={{
                  width: '100%',
                  bgcolor: '#EBE9E4', // Soft beige background from screenshot
                  borderRadius: '10px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Question Header */}
                <Box 
                  onClick={handleChange(index)}
                  sx={{
                    width: '100%',
                    minHeight: '59px', // "one of question box height: 59"
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: { xs: '20px', md: '30px' },
                    py: '15px',
                    cursor: 'pointer',
                  }}
                >
                  <Typography 
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 400,
                      fontSize: { xs: '15px', md: '17px' },
                      lineHeight: '20px',
                      color: 'rgba(0, 0, 0, 1)'
                    }}
                  >
                    {faq.question}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', flexShrink: 0, ml: 2 }}>
                    {isExpanded ? (
                      <Typography sx={{ fontSize: '24px', fontWeight: 400, lineHeight: 1 }}>—</Typography>
                    ) : (
                      <KeyboardArrowDownIcon sx={{ fontSize: '28px', color: '#000' }} />
                    )}
                  </Box>
                </Box>

                {/* Answer Body */}
                <Collapse in={isExpanded}>
                  <Box 
                    sx={{
                      px: { xs: '20px', md: '30px' },
                      pb: '25px',
                      pt: '5px',
                      display: 'flex',
                      alignItems: 'stretch'
                    }}
                  >
                    {/* Vertical Line */}
                    <Box 
                      sx={{
                        width: '3px',
                        bgcolor: 'rgba(202, 153, 58, 1)',
                        mr: '25px', // padding between line and text
                        flexShrink: 0
                      }}
                    />
                    <Typography 
                      sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 400,
                        fontSize: { xs: '15px', md: '17px' },
                        lineHeight: '20px',
                        color: 'rgba(117, 117, 117, 1)'
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;
