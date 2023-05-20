import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonDetail from "./components/pages/PokemonDetail";
import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
