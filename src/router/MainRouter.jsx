import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import ItemDetail from "../components/ItemDetail/ItemDetail.jsx"; // Asegúrate de que esta ruta sea correcta
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";

export const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<ItemDetail />} />
            </Routes>
        </Router>
    );
};
