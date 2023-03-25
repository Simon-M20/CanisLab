import { HashRouter, Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Treats from "../Pages/Treats";

function MyRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='About' element={<About />} />
                <Route path='Treats' element={<Treats />} />
            </Routes>
        </HashRouter>
    );
}

export default MyRoutes;
