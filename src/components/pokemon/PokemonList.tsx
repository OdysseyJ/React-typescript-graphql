import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Loading from "../common/Loading";
import PokemonRow, { PokemonRowProps } from "./PokemonRow";

import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS_FOR_LIST } from "../../queries/PokemonQueries";

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper
//   },
//   gridList: {
//     width: 500,
//     height: 450
//   },
//   icon: {
//     color: "rgba(255, 255, 255, 0.54)"
//   }
// }));
type PokemonListProps = {
  category: string;
};

function PokemonList({ category }: PokemonListProps) {
  //   const classes = useStyles();
  const [count, setCount] = useState<number>(30);

  const { loading, error, data } = useQuery(
    GET_POKEMONS_FOR_LIST(count, category)
  );

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      loading
    ) {
      setCount(count + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [count]);

  if (loading && count === 30) return <Loading show={loading}></Loading>;
  if (error) return <p>Error!(</p>;
  return (
    <GridList cellHeight={180}>
      {data.pokemons.map(
        ({ id, number, name, image, types }: PokemonRowProps) => (
          <PokemonRow
            id={id}
            number={number}
            name={name}
            image={image}
            types={types}
          ></PokemonRow>
        )
      )}
    </GridList>
  );
}

export default PokemonList;
