import { Route, Routes } from "react-router-dom";
import { Header } from "../components/ui/Header/Header.tsx";
import { Home } from "../components/screens/home/Home";
import { Search } from "../components/screens/Search/Search.tsx";
import { DCHeroes } from "../components/screens/DCHeroes/DCHeroes.tsx";
import { MarvelHeores } from "../components/screens/MarvelHeroes/MarvelHeores.tsx";
import { Heroe } from "../components/screens/Heroe/Heroe.tsx";

export const ProtectedRoutes = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dcHeroes" element={<DCHeroes />} />
        <Route path="/marvelHeroes" element={<MarvelHeores />} />
        <Route path="/hero/:id" element={<Heroe />} />
      </Routes>
    </>
  );
};
