import React, { useEffect, useState, useCallback } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Loading from "../common/Loading";
import PokemonRow, { PokemonRowProps } from "./PokemonRow";

import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../../queries/PokemonQueries";

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

function PokemonList() {
  //   const classes = useStyles();
  const [count, setCount] = useState<number>(30);

  const { loading, error, data } = useQuery(GET_POKEMONS(count));

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      loading
    ) {
      console.log("TEST");
      console.log(count);
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
