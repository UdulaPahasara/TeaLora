import React, { useState } from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import Seo from '../components/Common/Seo';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Reusing ContactUs hero image as a placeholder for FAQ hero
import faqHero from '../assets/FAQ/faqHero.webp';

const faqs = [
  {
    question: "What makes Tealora Ceylon tea special?",
    answer: "Tealora Ceylon offers carefully selected premium teas sourced from Sri Lanka's renowned tea-growing regions, delivering exceptional flavour, freshness, and quality."
  },
  {
    question: "Where is your tea sourced from?",
    answer: "Our teas are ethically sourced from selected in Hill country Sri Lanka"
  },
  {
    question: "Are your teas 100% natural?",
    answer: "Yes. Our teas are made using carefully selected natural ingredients with no artificial colours or flavours."
  },
  {
    question: "Do your teas contain caffeine?",
    answer: "Our black, green, and white teas naturally contain caffeine. Most herbal infusions are naturally caffeine-free."
  },
  {
    question: "How should I brew your tea?",
    answer: "Brewing instructions are printed on every package to ensure the perfect cup."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes. We provide international shipping to selected countries. Shipping availability depends on your location."
  },
  {
    question: "Can I order customized corporate gift boxes?",
    answer: "Absolutely. We offer personalized corporate gift solutions with custom branding for businesses and special events."
  },
  {
    question: "How should I store my tea?",
    answer: "Store your tea in a cool, dry place away from direct sunlight and strong odours to preserve freshness."
  },
  {
    question: "Are your products suitable as gifts?",
    answer: "Yes. Every Tealora gift collection is elegantly packaged to create a memorable gifting experience."
  },
  {
    question: "How can I contact Tealora Ceylon?",
    answer: "You can reach us through our Contact page, email, or social media channels. Our team is happy to assist you."
  },
  {
    question: "Do you accept bulk or wholesale orders?",
    answer: "Yes. We welcome wholesale, retail, hotel, café, and export inquiries."
  },
  {
    question: "Do you offer private label or OEM services?",
    answer: "Yes. We offer private label solutions for selected international partners."
  },
  {
    question: "Do you provide export documentation?",
    answer: "Yes. We provide the necessary export documentation according to destination country requirements."
  },
  {
    question: "Is your packaging eco-friendly?",
    answer: "We are committed to using high-quality, sustainable packaging materials whenever possible."
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
