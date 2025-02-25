import {
  Box,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Button,
  Flex,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

import PageContainer from '../components/PageContainer';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
// Import FAQ data from data file
import { faqCategories } from '../data/faqData';

function FAQ() {
  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <PageContainer>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about prosthetics, orthotics, and our services. If you don't see the information you're looking for, our team is always here to help."
        backgroundImage="https://images.unsplash.com/photo-1584516297137-81dbb9a2dbe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="50vh"
      />

      <Box py={16}>
        <Container maxW="container.lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentVariants}
          >
            <SectionHeading
              title="How Can We Help You?"
              subtitle="Browse our frequently asked questions to find the information you need about prosthetic and orthotic care."
            />

            {faqCategories.map((category, categoryIndex) => (
              <Box key={category.id} mb={10}>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="brand.600"
                  mb={4}
                  fontFamily="heading"
                >
                  {category.title}
                </Text>
                <Accordion allowMultiple>
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={`${category.id}-${faqIndex}`}
                      mb={3}
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="md"
                      overflow="hidden"
                    >
                      <h3>
                        <AccordionButton
                          py={4}
                          px={5}
                          _expanded={{ bg: 'brand.50', color: 'brand.600' }}
                        >
                          <Box flex="1" textAlign="left" fontWeight="medium" fontSize="lg">
                            {faq.question}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel pb={4} px={5} bg="white">
                        <Text color="gray.700" lineHeight="tall">
                          {faq.answer}
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            ))}
          </motion.div>

          <Box
            mt={16}
            p={8}
            borderRadius="lg"
            bg="brand.50"
            borderLeft="4px solid"
            borderColor="brand.500"
          >
            <Text fontSize="xl" fontWeight="medium" mb={4}>
              Didn't find the answer you were looking for?
            </Text>
            <Text mb={5}>
              Our team is always here to help answer your specific questions and provide personalized guidance. Feel free to reach out to us directly.
            </Text>
            <Flex
              direction={{ base: 'column', sm: 'row' }}
              gap={4}
            >
              <Button
                as={RouterLink}
                to="/contact"
                colorScheme="brand"
                size="lg"
                rightIcon={<ArrowForwardIcon />}
              >
                Contact Us
              </Button>
              <Button
                as={Link}
                href="tel:+11234567890"
                variant="outline"
                colorScheme="brand"
                size="lg"
              >
                Call (123) 456-7890
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>
    </PageContainer>
  );
}

export default FAQ;