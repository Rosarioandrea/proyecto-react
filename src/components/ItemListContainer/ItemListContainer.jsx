import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  useColorModeValue,
  HStack,
  Center,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

const ItemListContainer = ({ products }) => {
  return (
    <Center py={6}>
      <Box>
        {products.map((product) => (
          <Box
            key={product.id} // Asegúrate de que cada producto tenga un id único
            w="xs"
            rounded={'sm'}
            my={5}
            mx={[0, 5]}
            overflow={'hidden'}
            bg="white"
            border={'1px'}
            borderColor="black"
            boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
            <Box h={'200px'} borderBottom={'1px'} borderColor="black">
              <Img
                src={product.image} // Usa la imagen del producto
                roundedTop={'sm'}
                objectFit="cover"
                h="full"
                w="full"
                alt={product.name} // Usa el nombre del producto como alt
              />
            </Box>
            <Box p={4}>
              <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
                <Text fontSize={'xs'} fontWeight="medium">
                  {product.category || "General"}
                </Text>
              </Box>
              <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                {product.name}
              </Heading>
              <Text color={'gray.500'} noOfLines={2}>
                {product.description}
              </Text>
            </Box>
            <HStack borderTop={'1px'} color="black">
              <Flex
                p={4}
                alignItems="center"
                justifyContent={'space-between'}
                roundedBottom={'sm'}
                cursor={'pointer'}
                w="full">
                <Text fontSize={'md'} fontWeight={'semibold'}>
                  View more
                </Text>
                <BsArrowUpRight />
              </Flex>
            </HStack>
          </Box>
        ))}
      </Box>
    </Center>
  );
};

export default ItemListContainer;
