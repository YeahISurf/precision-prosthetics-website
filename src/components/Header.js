import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <Box bg="blue.500" p={4} position="sticky" top={0} zIndex={10}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
          Precision Prosthetics
        </Link>
        <Flex>
          <Link as={RouterLink} to="/about" color="white" mx={4} _hover={{ textDecoration: 'underline' }}>
            About
          </Link>
          <Link as={RouterLink} to="/services" color="white" mx={4} _hover={{ textDecoration: 'underline' }}>
            Services
          </Link>
          <Link as={RouterLink} to="/products" color="white" mx={4} _hover={{ textDecoration: 'underline' }}>
            Products
          </Link>
          <Link as={RouterLink} to="/testimonials" color="white" mx={4} _hover={{ textDecoration: 'underline' }}>
            Testimonials
          </Link>
          <Link as={RouterLink} to="/blog" color="white" mx={4} _hover={{ textDecoration: 'underline' }}>
            Blog
          </Link>
          <Link as={RouterLink} to="/contact" color="white" mx={4} _hover={{ textDecoration: 'underline' }}>
            Contact
          </Link>
          <Link as={RouterLink} to="/resources" color="white" mx={4} _hover={{ textDecoration: 'underline' }}>
            Resources
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
