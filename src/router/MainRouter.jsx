import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home.jsx";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";

export const MainRouter = ( )  => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/item/:id" element={<ItemDetail />} />
            </Routes>
        </Router>
    );

};
