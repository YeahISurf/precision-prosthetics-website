import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { Box, FormControl, FormLabel, Input, Textarea, Select, Button, FormErrorMessage } from '@chakra-ui/react';

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      reason: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string(),
      message: Yup.string().required('Required'),
      reason: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      // Replace with your actual EmailJS credentials
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_USER_ID')
        .then(() => {
          alert('Message sent successfully!');
          resetForm();
        }, (error) => {
          alert('Failed to send message. Please try again.');
        });
    },
  });

  return (
    <Box as="form" onSubmit={formik.handleSubmit}>
      <FormControl mb={4} isInvalid={formik.errors.name && formik.touched.name}>
        <FormLabel>Name</FormLabel>
        <Input name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
      </FormControl>
      <FormControl mb={4} isInvalid={formik.errors.email && formik.touched.email}>
        <FormLabel>Email</FormLabel>
        <Input name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Phone</FormLabel>
        <Input name="phone" onChange={formik.handleChange} value={formik.values.phone} />
      </FormControl>
      <FormControl mb={4} isInvalid={formik.errors.reason && formik.touched.reason}>
        <FormLabel>Reason for Contact</FormLabel>
        <Select name="reason" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.reason}>
          <option value="">Select a reason</option>
          <option value="general">General Inquiry</option>
          <option value="appointment">Appointment Request</option>
          <option value="product">Product Information</option>
        </Select>
        <FormErrorMessage>{formik.errors.reason}</FormErrorMessage>
      </FormControl>
      <FormControl mb={4} isInvalid={formik.errors.message && formik.touched.message}>
        <FormLabel>Message</FormLabel>
        <Textarea name="message" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} />
        <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit" colorScheme="blue" width="full">Send Message</Button>
    </Box>
  );
}

export default ContactForm;
