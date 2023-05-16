import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import PokemonDetail from "./components/pages/PokemonDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
