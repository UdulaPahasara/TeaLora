import React, { useState, useEffect } from 'react';
import { Box, Link, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Fab, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import logo from '../../assets/Navbar/Logo.webp';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const location = useLocation(); // To track active link

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Products', path: '/products' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: "FAQ", path: "/faq" },
        { name: 'Contact Us', path: '/contact' }
    ];

    const drawer = (
        <Box sx={{ 
            bgcolor: '#111', 
            height: '100%', 
            color: '#fff', 
            pt: 8, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            position: 'relative'
        }}>
            <IconButton 
                onClick={handleDrawerToggle} 
                sx={{ color: '#fff', position: 'absolute', top: 20, right: 20 }}
            >
                <CloseIcon />
            </IconButton>
            <List sx={{ width: '100%', textAlign: 'center' }}>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton 
                            component={RouterLink}
                            to={item.path}
                            sx={{ textAlign: 'center', justifyContent: 'center' }} 
                            onClick={handleDrawerToggle}
                        >
                            <ListItemText 
                                primary={
                                    <Typography sx={{ 
                                        fontFamily: 'Poppins, sans-serif', 
                                        fontWeight: 600, 
                                        fontSize: '16px',
                                        textTransform: 'capitalize',
                                        color: location.pathname === item.path ? 'rgba(202, 153, 58, 1)' : '#fff'
                                    }}>
                                        {item.name}
                                    </Typography>
                                } 
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
        <Box component="nav" sx={{
            width: '100%',
            height: '70px',
            bgcolor: '#000',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                width: '1440px',
                maxWidth: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: { xs: 2, md: 5 }, // Padding for smaller screens
                '@media (min-width: 1440px)': {
                    justifyContent: 'flex-start',
                    px: 0
                }
            }}>
                {/* Logo */}
                <Box 
                    component={RouterLink} 
                    to="/"
                    sx={{ 
                        position: 'static',
                        '@media (min-width: 1440px)': {
                            position: 'absolute',
                            left: '123px'
                        },
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none'
                    }} 
                >
                    <Box
                        component="img"
                        src={logo} 
                        alt="TeaLora Logo" 
                        sx={{
                            width: '134px',
                            height: '42px',
                            objectFit: 'contain'
                        }}
                    />
                </Box>

                {/* Desktop Navigation Links */}
                <Box sx={{
                    position: 'static',
                    '@media (min-width: 1440px)': {
                        position: 'absolute',
                        left: '688px'
                    },
                    display: { xs: 'none', md: 'flex' },
                    gap: { md: '20px', lg: '42px' },
                    alignItems: 'center'
                }}>
                    {navItems.map((item) => (
                        <Link 
                            key={item.name}
                            component={RouterLink}
                            to={item.path}
                            underline="none"
                            sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '16px',
                                color: location.pathname === item.path ? 'rgba(202, 153, 58, 1)' : '#fff',
                                textTransform: 'capitalize',
                                transition: 'color 0.3s ease',
                                '&:hover': {
                                    color: 'rgba(202, 153, 58, 1)'
                                }
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </Box>

                {/* Mobile Hamburger Menu Icon */}
                <IconButton 
                    color="inherit" 
                    aria-label="open drawer" 
                    edge="end" 
                    onClick={handleDrawerToggle} 
                    sx={{ display: { md: 'none' }, color: '#fff' }}
                >
                    <MenuIcon />
                </IconButton>
            </Box>

            {/* Mobile Drawer Navigation */}
            <Drawer
                anchor="right"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%', maxWidth: '300px' },
                }}
            >
                {drawer}
            </Drawer>
        </Box>

        {showScrollTop && (
            <Fab 
                size="small" 
                onClick={scrollToTop} 
                sx={{
                    display: { xs: 'none', sm: 'flex' },
                    position: 'fixed',
                    bottom: 20,
                    right: 20,
                    zIndex: 1000,
                    bgcolor: 'rgba(202, 153, 58, 1)',
                    '&:hover': {
                        bgcolor: 'rgba(202, 153, 58, 0.8)'
                    }
                }}
            >
                <KeyboardArrowUpIcon sx={{ color: '#fff' }} />
            </Fab>
        )}
        </>
    );
};

export default Navbar;
