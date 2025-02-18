import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Produtos from "./pages/ProdutosUm/ProdutosUm";
import CursosUm from "./components/CursosUm/CursosUm";
import ProdutosDois from "./pages/ProdutosDois/ProdutosDois";
import ProdutosTress from "./pages/ProdutosTres/ProdutosTres";
import ProdutosQuatroo from "./pages/ProdutosQuatro/ProdutosQuatro";
import ProdutosGerall from "./pages/ProdutosGeral/ProdutosGeral";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtosUm" element={<Produtos />} />
                <Route path="/cursosUm" element={<CursosUm />} />
                <Route path="/produtosDois" element={<ProdutosDois />} />
                <Route path="/produtosTres" element={<ProdutosTress />} />
                <Route path="/produtosQuatro" element={<ProdutosQuatroo/>} />
                <Route path="/produtosGeral" element={<ProdutosGerall />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
