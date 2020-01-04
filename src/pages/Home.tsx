import React, { useState, useCallback } from "react";
import PokemonList from "../components/pokemon/PokemonList";
import Categories from "../components/pokemon/Categories";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home = () => {
  // const [category, setCategory] = useState<string>("all");
  // const onSelect = useCallback(category => setCategory(category), []);

  return (
    <div>
      <Header></Header>
      {/* <Categories category={category} onSelect={onSelect}></Categories>
      <PokemonList category={category} /> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
