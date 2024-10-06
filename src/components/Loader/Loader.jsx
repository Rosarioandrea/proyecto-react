import React from 'react';
import { Spinner, Center } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Center height="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
        aria-label="Loading" // Atributo para accesibilidad
      />
      <Text ml={4}>Cargando...</Text>
    </Center>
  );
};

export default Loader;
