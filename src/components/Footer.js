import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Heading,
  Link,
  Button,
  Input,
  IconButton,
  Divider,
  useToast,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from 'react-icons/fa';
import { useState } from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const toast = useToast();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    // This would typically connect to your email service
    toast({
      title: 'Subscribed!',
      description: `You've been subscribed to our newsletter with ${email}`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    setEmail('');
  };

  return (
    <Box bg="neutral.900" color="white">
      {/* Pre-Footer CTA */}
      <Box py={10} bg="brand.600">
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
          >
            <Box mb={{ base: 6, md: 0 }} maxW={{ md: '60%' }}>
              <Heading as="h3" size="lg" mb={2}>
                Ready to Discover What's Possible?
              </Heading>
              <Text fontSize="lg">
                Schedule a consultation with our prosthetic specialists today.
              </Text>
            </Box>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              colorScheme="white"
              variant="outline"
              rightIcon={<ArrowForwardIcon />}
              _hover={{ bg: 'whiteAlpha.200' }}
            >
              Request a Consultation
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Main Footer */}
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} mb={10}>
          {/* Column 1 - About */}
          <Stack spacing={6}>
            <Box>
              <Flex align="center">
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
                <Text fontSize="xl" fontWeight="bold">
                  Precision Prosthetics
                </Text>
              </Flex>
            </Box>
            <Text color="whiteAlpha.800">
              Combining cutting-edge technology with compassionate care to provide
              personalized prosthetic and orthotic solutions since 2020.
            </Text>
            <Stack direction="row" spacing={4}>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                colorScheme="brand"
                variant="ghost"
                borderRadius="full"
                fontSize="20px"
              />
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                colorScheme="brand"
                variant="ghost"
                borderRadius="full"
                fontSize="20px"
              />
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                colorScheme="brand"
                variant="ghost"
                borderRadius="full"
                fontSize="20px"
              />
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                colorScheme="brand"
                variant="ghost"
                borderRadius="full"
                fontSize="20px"
              />
            </Stack>
          </Stack>

          {/* Column 2 - Links */}
          <Stack spacing={4}>
            <Heading as="h4" size="md">
              Quick Links
            </Heading>
            <Link as={RouterLink} to="/about" color="whiteAlpha.800" _hover={{ color: 'brand.400' }}>
              About Us
            </Link>
            <Link as={RouterLink} to="/services" color="whiteAlpha.800" _hover={{ color: 'brand.400' }}>
              Our Services
            </Link>
            <Link as={RouterLink} to="/products" color="whiteAlpha.800" _hover={{ color: 'brand.400' }}>
              Products
            </Link>
            <Link as={RouterLink} to="/testimonials" color="whiteAlpha.800" _hover={{ color: 'brand.400' }}>
              Testimonials
            </Link>
            <Link as={RouterLink} to="/blog" color="whiteAlpha.800" _hover={{ color: 'brand.400' }}>
              Blog
            </Link>
            <Link as={RouterLink} to="/resources" color="whiteAlpha.800" _hover={{ color: 'brand.400' }}>
              Resources
            </Link>
            <Link as={RouterLink} to="/contact" color="whiteAlpha.800" _hover={{ color: 'brand.400' }}>
              Contact Us
            </Link>
          </Stack>

          {/* Column 3 - Contact */}
          <Stack spacing={4}>
            <Heading as="h4" size="md">
              Contact Information
            </Heading>
            <Flex align="center">
              <Box as={FaMapMarkerAlt} mr={3} color="brand.400" />
              <Text color="whiteAlpha.800">123 Main St, Suite 100, City, State, ZIP</Text>
            </Flex>
            <Flex align="center">
              <Box as={FaPhoneAlt} mr={3} color="brand.400" />
              <Text color="whiteAlpha.800">(123) 456-7890</Text>
            </Flex>
            <Flex align="center">
              <Box as={FaEnvelope} mr={3} color="brand.400" />
              <Text color="whiteAlpha.800">info@precisionprosthetics.com</Text>
            </Flex>
            <Flex align="center">
              <Box as={FaClock} mr={3} color="brand.400" />
              <Text color="whiteAlpha.800">Mon-Fri: 9AM-5PM</Text>
            </Flex>
          </Stack>

          {/* Column 4 - Newsletter */}
          <Stack spacing={4}>
            <Heading as="h4" size="md">
              Newsletter
            </Heading>
            <Text color="whiteAlpha.800">
              Subscribe to our newsletter for the latest news and updates.
            </Text>
            <Flex as="form" onSubmit={handleSubscribe}>
              <Input
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="whiteAlpha.100"
                border={0}
                _focus={{ bg: 'whiteAlpha.300' }}
                mr={2}
              />
              <IconButton
                aria-label="Subscribe"
                icon={<ArrowForwardIcon />}
                colorScheme="brand"
                type="submit"
              />
            </Flex>
          </Stack>
        </SimpleGrid>

        <Divider borderColor="whiteAlpha.300" />

        {/* Copyright */}
        <Box pt={5}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'center', md: 'center' }}
          >
            <Text color="whiteAlpha.600" fontSize="sm">
              &copy; {currentYear} Precision Prosthetics. All rights reserved.
            </Text>
            <Stack direction="row" spacing={6} mt={{ base: 4, md: 0 }}>
              <Link href="#" color="whiteAlpha.600" fontSize="sm">
                Privacy Policy
              </Link>
              <Link href="#" color="whiteAlpha.600" fontSize="sm">
                Terms of Service
              </Link>
              <Link href="#" color="whiteAlpha.600" fontSize="sm">
                Accessibility
              </Link>
            </Stack>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
