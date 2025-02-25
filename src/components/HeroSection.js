import { Box, Heading, Text, Button, Stack, Container, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

function HeroSection({
  title,
  subtitle,
  ctaText = 'Learn More',
  ctaLink = '/about',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  height = '90vh',
  overlay = true,
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <Box
      position="relative"
      height={height}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _after={overlay ? {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgGradient: 'linear(to-r, rgba(0,0,0,0.7), rgba(0,0,0,0.4))',
        zIndex: 1,
      } : {}}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgImage={`url(${backgroundImage})`}
        bgSize="cover"
        bgPosition="center"
        filter="brightness(0.9)"
      />
      <Container
        maxW="container.xl"
        position="relative"
        zIndex={2}
        centerContent
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%', textAlign: 'center' }}
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            color="white"
            textAlign="center"
            px={4}
          >
            <motion.div variants={itemVariants}>
              <Heading
                as="h1"
                size={['xl', '2xl', '3xl']}
                fontWeight="bold"
                mb={4}
                letterSpacing="tight"
                lineHeight="1.2"
                maxW="800px"
              >
                {title}
              </Heading>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Text
                fontSize={['lg', 'xl', '2xl']}
                mb={8}
                maxW="700px"
                lineHeight="1.6"
              >
                {subtitle}
              </Text>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Stack direction={['column', 'row']} spacing={4}>
                <Button
                  as={RouterLink}
                  to={ctaLink}
                  size="lg"
                  colorScheme="brand"
                  fontWeight="medium"
                  px={8}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'xl',
                  }}
                >
                  {ctaText}
                </Button>
                {secondaryCtaText && (
                  <Button
                    as={RouterLink}
                    to={secondaryCtaLink}
                    size="lg"
                    variant="outline"
                    color="white"
                    borderColor="white"
                    fontWeight="medium"
                    px={8}
                    _hover={{
                      bg: 'whiteAlpha.200',
                      transform: 'translateY(-2px)',
                      boxShadow: 'xl',
                    }}
                  >
                    {secondaryCtaText}
                  </Button>
                )}
              </Stack>
            </motion.div>
          </Flex>
        </motion.div>
      </Container>
    </Box>
  );
}

export default HeroSection;
