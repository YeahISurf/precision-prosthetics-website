import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HamburgerIcon, PhoneIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      zIndex={100}
      transition="all 0.3s ease"
      bg={scrolled || !isHomePage ? 'white' : 'transparent'}
      boxShadow={scrolled || !isHomePage ? 'md' : 'none'}
    >
      <Container maxW="container.xl">
        <Flex py={3} align="center" justify="space-between">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
            <Flex align="center">
              {/* Replace with your actual logo */}
              <Box
                bg="brand.500"
                color="white"
                fontSize="xl"
                fontWeight="bold"
                px={3}
                py={1}
                borderRadius="md"
                letterSpacing="tight"
                mr={2}
              >
                PP
              </Box>
              <Box
                fontSize="xl"
                fontWeight="semibold"
                color={scrolled || !isHomePage ? 'neutral.800' : 'white'}
                letterSpacing="tight"
                display={['none', null, 'block']}
              >
                Precision Prosthetics
              </Box>
            </Flex>
          </Link>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                name={link.name}
                scrolled={scrolled}
                isHomePage={isHomePage}
              />
            ))}
          </HStack>

          {/* Contact Button & Mobile Menu Toggle */}
          <HStack spacing={3}>
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="brand"
              size={['sm', 'md']}
              display={{ base: 'none', md: 'flex' }}
              leftIcon={<PhoneIcon />}
            >
              Contact Us
            </Button>

            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              variant="ghost"
              color={scrolled || !isHomePage ? 'neutral.800' : 'white'}
              display={{ base: 'flex', md: 'none' }}
              onClick={onOpen}
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Box
              bg="brand.500"
              color="white"
              display="inline-block"
              fontSize="xl"
              fontWeight="bold"
              px={3}
              py={1}
              borderRadius="md"
              letterSpacing="tight"
              mr={2}
            >
              PP
            </Box>
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  fontSize="lg"
                  fontWeight="medium"
                  py={2}
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                as={RouterLink}
                to="/contact"
                colorScheme="brand"
                leftIcon={<PhoneIcon />}
                onClick={onClose}
              >
                Contact Us
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

// NavLink component with hover effect
function NavLink({ to, name, scrolled, isHomePage }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Box position="relative">
      <Link
        as={RouterLink}
        to={to}
        px={2}
        py={1}
        rounded={'md'}
        color={scrolled || !isHomePage ? 
          (isActive ? 'brand.500' : 'neutral.700') : 
          (isActive ? 'white' : 'whiteAlpha.900')}
        fontWeight={isActive ? 'semibold' : 'medium'}
        _hover={{ textDecoration: 'none' }}
      >
        {name}
      </Link>
      {isActive && (
        <AnimatePresence>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            style={{
              height: '2px',
              backgroundColor: scrolled || !isHomePage ? 'var(--chakra-colors-brand-500)' : 'white',
              position: 'absolute',
              bottom: '-2px',
              left: 0,
            }}
          />
        </AnimatePresence>
      )}
    </Box>
  );
}

export default Header;
