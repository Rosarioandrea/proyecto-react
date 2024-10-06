import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"; // Importa el componente
import { getAllProducts } from "../services/products.service"; // Asegúrate de que este servicio esté bien configurado
import { Box, Center, Heading } from "@chakra-ui/react"; // Opcional, si deseas usar Chakra UI aquí también

const Home = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllProducts()
            .then((res) => {
                setProductsData(res.data.products); // Obtener productos de la API
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false); // Quitar loading una vez que se hayan cargado los productos
            });
    }, []);

    return (
        <Box>
            <Heading as="h1" size="lg" textAlign="center" my={4}>
                Listado de Productos
            </Heading>
            {loading ? (
                <Center>Loading...</Center>
            ) : (
                <ItemListContainer products={productsData} /> // Pasa los productos como prop
            )}
        </Box>
    );
};

export default Home;