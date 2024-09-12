import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar/NavBar";

const App = () => {

  return (

    <ChakraProvider>
      <NavBar></NavBar>
    </ChakraProvider>

  );

};

export default App;


