import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Alimentacion from "../Pages/Alimentacion";
import Adiestramiento from "../Pages/Adiestramiento";
import Educacion from "../Pages/Educacion";
import Accesorios from "../Pages/Accesorios";

function MyRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='Educacion' element={<Educacion />} />
                <Route path='Adiestramiento' element={<Adiestramiento />} />
                <Route path='Alimentacion' element={<Alimentacion />} />
                <Route path='Accesorios' element={<Accesorios />} />
            </Routes>
        </HashRouter>
    );
}

export default MyRoutes;
