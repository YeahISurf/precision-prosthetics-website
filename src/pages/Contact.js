import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  FormErrorMessage,
  Icon,
  useBreakpointValue,
  Stack,
  useToast,
  AspectRatio,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import PageContainer from '../components/PageContainer';
import SectionHeading from '../components/SectionHeading';

function Contact() {
  const formLayout = useBreakpointValue({ base: '1fr', md: '1fr 1fr' });
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please enter your name'),
      email: Yup.string().email('Invalid email address').required('Please enter your email'),
      phone: Yup.string(),
      service: Yup.string().required('Please select a service'),
      message: Yup.string().required('Please enter your message'),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      // Replace with your actual EmailJS credentials
      emailjs
        .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_USER_ID')
        .then(() => {
          toast({
            title: "Message sent!",
            description: "We've received your message and will get back to you soon.",
            status: "success",
            duration: 5000,
            isClosable: true
          });
          resetForm();
        })
        .catch(() => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            status: "error",
            duration: 5000,
            isClosable: true
          });
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <PageContainer noTopPadding={true}>
      {/* Hero Section */}
      <Box
        bg="brand.500"
        py={16}
        position="relative"
        mt={0} // Add top margin to prevent overlap
        _before={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '150px',
          bg: 'white',
          borderTopLeftRadius: '50% 50%',
          borderTopRightRadius: '50% 50%',
          transform: 'scaleX(1.5)',
        }}
      >
        <Container maxW="container.xl" position="relative" zIndex={5}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box textAlign="center" color="white" mb={8}>
              <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                mb={4}
                letterSpacing="tight"
              >
                Get in Touch
              </Heading>
              <Text fontSize="xl" maxW="700px" mx="auto">
                We'd love to hear from you. Reach out to schedule a consultation, ask questions, or
                learn more about our services.
              </Text>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Information & Form Section */}
      <Box py={12} mt={-4}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="start">
            {/* Contact Information */}
            <Box>
              <SectionHeading
                title="Contact Information"
                subtitle="Here's how you can reach us."
                centered={false}
              />

              <Stack spacing={6} mt={8}>
                <ContactInfoItem
                  icon={FaMapMarkerAlt}
                  title="Our Location"
                  content="123 Wilshire Blvd, Suite 100"
                  subContent="Los Angeles, CA 90024"
                />

                <ContactInfoItem
                  icon={FaPhoneAlt}
                  title="Phone"
                  content="(310) 555-7890"
                  subContent="Monday to Friday, 9am to 5pm"
                />

                <ContactInfoItem
                  icon={FaEnvelope}
                  title="Email"
                  content="info@precisionprosthetics.com"
                  subContent="We'll respond as soon as possible"
                />

                <ContactInfoItem
                  icon={FaClock}
                  title="Hours of Operation"
                  content="Monday - Friday: 9:00 AM - 5:00 PM"
                  subContent="Saturday: 9:00 AM - 1:00 PM (By Appointment Only)"
                />
              </Stack>

              {/* Google Maps Embed */}
              <Box mt={10}>
                <AspectRatio ratio={16 / 9} borderRadius="xl" overflow="hidden" boxShadow="md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52861.03350688354!2d-118.49633233084368!3d34.06281109485559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc35fbd217ef%3A0xcf1ef9352700d95c!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1708889619500!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Precision Prosthetics Los Angeles Location"
                  />
                </AspectRatio>
              </Box>
            </Box>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                bg="white"
                p={8}
                borderRadius="xl"
                boxShadow="xl"
                borderWidth="1px"
                borderColor="gray.100"
              >
                <Heading as="h2" size="lg" mb={6}>
                  Send Us a Message
                </Heading>

                <Box as="form" onSubmit={formik.handleSubmit}>
                  <Grid templateColumns={formLayout} gap={6}>
                    <FormControl
                      isInvalid={formik.errors.name && formik.touched.name}
                      mb={4}
                    >
                      <FormLabel>Name</FormLabel>
                      <Input
                        name="name"
                        placeholder="Your full name"
                        size="lg"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        borderColor="gray.300"
                        _hover={{ borderColor: 'brand.500' }}
                        _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px #1861ff' }}
                      />
                      <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    </FormControl>

                    <FormControl
                      isInvalid={formik.errors.email && formik.touched.email}
                      mb={4}
                    >
                      <FormLabel>Email</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        size="lg"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        borderColor="gray.300"
                        _hover={{ borderColor: 'brand.500' }}
                        _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px #1861ff' }}
                      />
                      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                  </Grid>

                  <Grid templateColumns={formLayout} gap={6}>
                    <FormControl mb={4}>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <Input
                        name="phone"
                        placeholder="Your phone number"
                        size="lg"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        borderColor="gray.300"
                        _hover={{ borderColor: 'brand.500' }}
                        _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px #1861ff' }}
                      />
                    </FormControl>

                    <FormControl
                      isInvalid={formik.errors.service && formik.touched.service}
                      mb={4}
                    >
                      <FormLabel>Service</FormLabel>
                      <Select
                        name="service"
                        placeholder="Select a service"
                        size="lg"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.service}
                        borderColor="gray.300"
                        _hover={{ borderColor: 'brand.500' }}
                        _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px #1861ff' }}
                      >
                        <option value="prosthetic">Prosthetic Services</option>
                        <option value="orthotic">Orthotic Services</option>
                        <option value="pediatric">Pediatric Services</option>
                        <option value="rehabilitation">Rehabilitation</option>
                        <option value="consultation">General Consultation</option>
                        <option value="other">Other Inquiry</option>
                      </Select>
                      <FormErrorMessage>{formik.errors.service}</FormErrorMessage>
                    </FormControl>
                  </Grid>

                  <FormControl
                    isInvalid={formik.errors.message && formik.touched.message}
                    mb={6}
                  >
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="How can we help you?"
                      size="lg"
                      rows={6}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                      borderColor="gray.300"
                      _hover={{ borderColor: 'brand.500' }}
                      _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px #1861ff' }}
                    />
                    <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="brand"
                    size="lg"
                    width="full"
                    isLoading={formik.isSubmitting}
                    loadingText="Sending..."
                    py={7}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="container.xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and appointment process."
          />

          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap={8}
            mt={10}
          >
            <FaqItem
              question="What should I expect during my first appointment?"
              answer="During your initial consultation, we'll discuss your needs, take measurements, and develop a personalized treatment plan. This appointment typically lasts about an hour."
              index={0}
            />

            <FaqItem
              question="Are your services covered by insurance?"
              answer="Many of our services are covered by insurance. We work with most major insurance providers and can help you understand your coverage before treatment begins."
              index={1}
            />

            <FaqItem
              question="How long does it take to receive a custom prosthetic?"
              answer="The timeframe varies depending on the complexity of your prosthetic. Typically, you can expect 2-4 weeks from initial consultation to final fitting."
              index={2}
            />

            <FaqItem
              question="Do you offer virtual consultations?"
              answer="Yes, we offer virtual consultations for certain services. Please contact us to determine if a virtual appointment is appropriate for your needs."
              index={3}
            />
          </Grid>
          
          <Flex justify="center" mt={10}>
            <Button
              as={RouterLink}
              to="/faq"
              size="lg"
              colorScheme="brand"
              rightIcon={<ArrowForwardIcon />}
            >
              View All FAQs
            </Button>
          </Flex>
        </Container>
      </Box>
    </PageContainer>
  );
}

// Contact Info Item Component
function ContactInfoItem({ icon, title, content, subContent }) {
  return (
    <Flex>
      <Flex
        align="center"
        justify="center"
        bg="brand.50"
        color="brand.500"
        boxSize="50px"
        borderRadius="full"
        mr={4}
        mt={1}
      >
        <Icon as={icon} boxSize="20px" />
      </Flex>
      <Box>
        <Text fontWeight="bold" fontSize="lg" mb={1}>
          {title}
        </Text>
        <Text color="neutral.800" mb={1}>
          {content}
        </Text>
        {subContent && (
          <Text color="neutral.600" fontSize="sm">
            {subContent}
          </Text>
        )}
      </Box>
    </Flex>
  );
}

// FAQ Item Component
function FaqItem({ question, answer, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box
        p={6}
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        borderLeft="4px solid"
        borderColor="brand.500"
      >
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          {question}
        </Text>
        <Text color="neutral.600">{answer}</Text>
      </Box>
    </motion.div>
  );
}

export default Contact;
