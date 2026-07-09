import { Helmet } from 'react-helmet-async'; 

export default function Seo({  
  title,  
  description,  
  type = "website",  
  image = "/social-share.webp",  
  url = "https://www.tealora.com/"  
}) { 
  // If you forget to add a title, it falls back to this default! 
  const siteTitle = title ? `${title} | TeaLora` : "TeaLora - Organic Sri Lankan Tea"; 

  // A default description just in case 
  const siteDescription = description || "Experience the finest organic teas from Sri Lanka with TeaLora."; 

  return ( 
    <Helmet> 
      {/* 1. The Basics (The Toy Box Name & Back Cover for Google) */} 
      <title>{siteTitle}</title> 
      <meta name="description" content={siteDescription} /> 

      {/* 2. Facebook, WhatsApp, & LinkedIn (Open Graph) */} 
      {/* This makes sure a cool preview card shows up when someone pastes your link in a chat! */} 
      <meta property="og:title" content={siteTitle} /> 
      <meta property="og:description" content={siteDescription} /> 
      <meta property="og:type" content={type} /> 
      <meta property="og:url" content={url} /> 
      <meta property="og:image" content={image} /> 

      {/* 3. Twitter (Because they use slightly different tags) */} 
      <meta name="twitter:card" content="summary_large_image" /> 
      <meta name="twitter:title" content={siteTitle} /> 
      <meta name="twitter:description" content={siteDescription} /> 
      <meta name="twitter:image" content={image} /> 
    </Helmet> 
  ); 
}
