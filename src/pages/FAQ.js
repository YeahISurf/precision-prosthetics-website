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

  // FAQ data
  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      faqs: [
        {
          question: 'What services does Precision Prosthetics offer?',
          answer: 'Precision Prosthetics offers a comprehensive range of prosthetic and orthotic services, including custom prosthetic design, orthotic bracing solutions, rehabilitation therapy, pediatric prosthetics, myoelectric prosthetics, and digital scanning and modeling. Our team of experts works closely with patients to create personalized solutions that meet their unique needs.',
        },
        {
          question: 'What makes Precision Prosthetics different from other providers?',
          answer: 'At Precision Prosthetics, we combine cutting-edge technology with compassionate care to create personalized solutions. Our team takes the time to understand each patient's unique needs and goals, ensuring that every prosthetic and orthotic device is tailored to provide optimal comfort, functionality, and aesthetic appeal. We pride ourselves on our ongoing support and commitment to helping our patients achieve their full potential.',
        },
        {
          question: 'Do I need a referral to make an appointment?',
          answer: 'In most cases, a referral from a physician is required for prosthetic and orthotic services. However, we welcome you to contact us for an initial consultation to discuss your needs. Our team can guide you through the referral process and help coordinate with your healthcare providers.',
        },
      ],
    },
    {
      id: 'prosthetics',
      title: 'About Prosthetics',
      faqs: [
        {
          question: 'How long does it take to get a prosthetic limb?',
          answer: 'The fabrication of a prosthesis is a very labor-intensive process that requires multiple fittings to ensure the best fit. Once insurance authorization is obtained, it typically takes about 2-4 weeks to create a custom prosthetic device. The entire process, from initial consultation to final delivery, may take several months depending on your individual healing process, insurance approval timeline, and the complexity of your prosthetic needs.',
        },
        {
          question: 'How long will my prosthetic limb last?',
          answer: 'The lifespan of a prosthetic device depends on several factors, including your activity level, body changes, and how well the device is maintained. On average, a prosthetic limb may last between 3-5 years. However, components may need to be replaced or adjusted more frequently. Regular check-ups with our prosthetists will help ensure your device remains in optimal condition.',
        },
        {
          question: 'Will I be able to do the same activities I did before my amputation?',
          answer: 'Many amputees return to their previous activities and even discover new ones. Your ability to participate in specific activities will depend on several factors, including your overall health, the level of amputation, and your prosthetic device. Our team works with you to understand your goals and design a prosthetic solution that supports your desired activity level. We also provide training and rehabilitation support to help you adapt to your prosthetic and regain confidence in your abilities.',
        },
        {
          question: 'How do I know which type of prosthetic is right for me?',
          answer: 'Determining the right prosthetic solution involves considering several factors, including your health status, activity level before amputation, mobility goals, and the amputation site. During your consultation, our prosthetists will discuss these factors with you and recommend options that best meet your needs. We may also consider your lifestyle, work requirements, and personal preferences to ensure your prosthetic device supports your quality of life.',
        },
      ],
    },
    {
      id: 'care',
      title: 'Prosthetic Care & Maintenance',
      faqs: [
        {
          question: 'How do I care for my prosthetic device?',
          answer: 'Proper care and maintenance of your prosthetic device are essential for its longevity and performance. Daily cleaning of the socket with mild soap and water is recommended. Keep your device dry and avoid exposure to extreme temperatures. Check regularly for signs of wear and tear, and contact us immediately if you notice any damage. Our team will provide you with specific care instructions tailored to your device.',
        },
        {
          question: 'How often should I have my prosthetic checked?',
          answer: 'We recommend scheduling regular check-ups every 6 months to ensure your prosthetic device fits properly and functions optimally. However, if you experience discomfort, pain, or notice any issues with your prosthetic, contact us immediately for an assessment. Regular maintenance helps prevent problems and extends the life of your device.',
        },
        {
          question: 'What should I do if my prosthetic becomes uncomfortable?',
          answer: 'If your prosthetic becomes uncomfortable, contact us right away. Discomfort can indicate that adjustments are needed due to changes in your residual limb, wear and tear on the device, or other issues. Never attempt to modify your prosthetic yourself. Our prosthetists can make adjustments to ensure proper fit and comfort, preventing potential complications from an ill-fitting device.',
        },
      ],
    },
    {
      id: 'insurance',
      title: 'Insurance & Coverage',
      faqs: [
        {
          question: 'Does insurance cover prosthetic devices?',
          answer: 'Most insurance plans, including Medicare, Medicaid, and private insurance, provide some coverage for prosthetic devices when deemed medically necessary. The Affordable Care Act (ACA) requires small group insurance plans to cover prosthetics as part of Essential Health Benefits. However, coverage varies widely between policies, with different deductibles, copayments, and coverage limits. Our insurance specialists will work with you to understand your benefits and maximize your coverage.',
        },
        {
          question: 'What is the cost of a prosthetic device?',
          answer: 'The cost of prosthetic devices varies widely depending on the type, complexity, and components required. Basic prosthetics may start at a few thousand dollars, while advanced devices with microprocessor technology can cost significantly more. Without insurance, prosthetic limbs can range from $5,000 to over $50,000. Our team will discuss options that balance your functional needs with financial considerations and work with your insurance to optimize coverage.',
        },
        {
          question: 'Does Precision Prosthetics offer payment plans?',
          answer: 'Yes, we understand that even with insurance coverage, the cost of prosthetic devices can be significant. We offer flexible payment plans to help make our services more accessible. Our financial counselors are available to discuss your specific situation and develop a payment plan that works for you. We also provide information about various funding resources and assistance programs that may be available to you.',
        },
      ],
    },
    {
      id: 'adaptation',
      title: 'Adaptation & Rehabilitation',
      faqs: [
        {
          question: 'How long will it take to adapt to my new prosthetic?',
          answer: 'The adaptation period varies for each individual, typically ranging from several weeks to several months. Factors affecting adaptation include your overall health, previous activity level, type of prosthetic, and commitment to rehabilitation. Remember that learning to use a prosthetic device is a process that requires patience and persistence. Our rehabilitation specialists will guide you through this journey, helping you set realistic expectations and achieve progressive milestones.',
        },
        {
          question: 'Will I need physical therapy after getting my prosthetic?',
          answer: 'Yes, physical therapy is an essential part of the rehabilitation process. Working with a physical therapist helps you learn how to use your prosthetic device effectively, develop proper gait and movement patterns, build strength and endurance, and prevent secondary complications. We collaborate closely with rehabilitation professionals to ensure a comprehensive approach to your care and successful adaptation to your prosthetic device.',
        },
        {
          question: 'What should I expect during the initial adjustment period?',
          answer: 'During the initial adjustment period, it's normal to experience some discomfort as your residual limb adapts to the prosthetic socket. You may notice changes in the size and shape of your residual limb, requiring adjustments to your prosthetic device. Fatigue is common as your body works harder to adapt to the new way of moving. Our team will monitor your progress closely, making necessary adjustments and providing guidance to minimize discomfort and optimize function.',
        },
      ],
    },
  ];

  return (
    <PageContainer>
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about prosthetics, orthotics, and our services. If you don't see the information you're looking for, our team is always here to help."
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
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