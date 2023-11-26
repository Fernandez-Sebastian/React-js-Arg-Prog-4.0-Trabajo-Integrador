import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {App} from './App.jsx'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#96d4f0',
        color: 'white',
      },
    },
  },
  components: {
    Checkbox: {
      variants: {
        circular: {
          control: {
            borderRadius: 'full',
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
