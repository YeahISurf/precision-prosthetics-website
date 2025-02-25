import { Box, Text, Flex, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="gray.800" p={6} color="white">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" flexDirection={['column', 'row']}>
        <Text>&copy; 2023 Precision Prosthetics. All rights reserved.</Text>
        <Flex mt={['4', '0']}>
          <Link href="#" mx={2} color="white" _hover={{ textDecoration: 'underline' }}>
            Facebook
          </Link>
          <Link href="#" mx={2} color="white" _hover={{ textDecoration: 'underline' }}>
            Twitter
          </Link>
          <Link href="#" mx={2} color="white" _hover={{ textDecoration: 'underline' }}>
            LinkedIn
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
