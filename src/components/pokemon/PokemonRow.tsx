import React from "react";
import { GridListTile, GridListTileBar } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  gridTile: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center"
  },
  pokemonImage: {
    height: 170,
    width: 170
  }
};

export type PokemonRowProps = {
  id: string;
  number: string;
  name: string;
  image: string;
  types: [string];
};

function PokemonRow({ id, number, name, image, types }: PokemonRowProps) {
  return (
    <div>
      <Link to={`${name}`}>
        <GridListTile key={id} style={styles.gridTile}>
          <img
            style={styles.pokemonImage}
            src={image}
            alt={`${number} - ${name}`}
          />
          <GridListTileBar
            title={`${number} - ${name}`}
            subtitle={types.join(", ")}
          />
        </GridListTile>
      </Link>
    </div>
  );
}

PokemonRow.defaultProps = {};

export default PokemonRow;
