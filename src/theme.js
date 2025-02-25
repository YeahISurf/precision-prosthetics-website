import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#e6f1ff',
    100: '#bdd4ff',
    200: '#94b7ff',
    300: '#6b9aff',
    400: '#427dff',
    500: '#1861ff', // primary brand color
    600: '#0047cc',
    700: '#003499',
    800: '#002266',
    900: '#001133',
  },
  accent: {
    50: '#f2fcfc',
    100: '#d4f2f6',
    200: '#a1e2eb',
    300: '#69cdd9',
    400: '#3fbcc8',
    500: '#2aa3ae', // secondary accent color
    600: '#208289',
    700: '#166065',
    800: '#0d4044',
    900: '#052022',
  },
  neutral: {
    50: '#f7f9fa',
    100: '#e3e8eb',
    200: '#c8d1d7',
    300: '#a4b4bd',
    400: '#7b919c',
    500: '#5d7683',
    600: '#455d69',
    700: '#34474f',
    800: '#1e2b30',
    900: '#0b1315',
  },
};

const fonts = {
  heading: "'Playfair Display', serif",
  body: "'Inter', sans-serif",
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'medium',
      borderRadius: 'md',
    },
    variants: {
      solid: (props) => ({
        bg: props.colorScheme === 'brand' ? 'brand.500' : 
             props.colorScheme === 'accent' ? 'accent.500' : 
             `${props.colorScheme}.500`,
        color: 'white',
        _hover: {
          bg: props.colorScheme === 'brand' ? 'brand.600' : 
               props.colorScheme === 'accent' ? 'accent.600' : 
               `${props.colorScheme}.600`,
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
        transition: 'all 0.3s ease',
      }),
      outline: (props) => ({
        borderColor: props.colorScheme === 'brand' ? 'brand.500' : 
                    props.colorScheme === 'accent' ? 'accent.500' : 
                    `${props.colorScheme}.500`,
        color: props.colorScheme === 'brand' ? 'brand.500' : 
               props.colorScheme === 'accent' ? 'accent.500' : 
               `${props.colorScheme}.500`,
        _hover: {
          bg: props.colorScheme === 'brand' ? 'brand.50' : 
               props.colorScheme === 'accent' ? 'accent.50' : 
               `${props.colorScheme}.50`,
          transform: 'translateY(-2px)',
          boxShadow: 'md',
        },
        transition: 'all 0.3s ease',
      }),
      ghost: (props) => ({
        _hover: {
          bg: props.colorScheme === 'brand' ? 'brand.50' : 
               props.colorScheme === 'accent' ? 'accent.50' : 
               `${props.colorScheme}.50`,
          transform: 'translateY(-1px)',
        },
        transition: 'all 0.3s ease',
      }),
    },
  },
  Card: {
    baseStyle: {
      container: {
        borderRadius: 'lg',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-5px)',
          boxShadow: 'xl',
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 'medium',
      lineHeight: '1.2',
    },
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
      },
      transition: 'all 0.3s ease',
    },
  },
};

const styles = {
  global: {
    body: {
      bg: 'white',
      color: 'neutral.800',
    },
  },
};

const theme = extendTheme({
  colors,
  fonts,
  components,
  styles,
});

export default theme;
