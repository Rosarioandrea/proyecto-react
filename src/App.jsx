import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar/NavBar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListConteniner/ItemListConteiner";



const App = () => {

  return (

    <ChakraProvider>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenidos a mi tienda"}></ItemListContainer>
    </ChakraProvider>

  );

};

export default App;


