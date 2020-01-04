import React from "react";

import PokemonEvolution, {
  PokemonEvolutionProps,
  EvolutionProps
} from "./PokemonEvolution";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
// import FlatButton from "@material-ui/core/FlatButton";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS_DETAIL } from "../../queries/PokemonQueries";
import useReactRouter from "use-react-router";
import { makeStyles } from "@material-ui/styles";
import { PokemonRowProps } from "./PokemonRow";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 5
  },
  cardMedia: {
    display: "flex",
    justifyContent: "center",
    minWidth: 200,
    maxWidth: 200
  },
  pokemonImage: {
    minWidth: 200,
    maxWidth: 200
  }
});

type PokemonDetailProps = {
  id: string;
};

const PokemonDetail = () => {
  const classes = useStyles();

  const { location } = useReactRouter();
  const { loading, error, data } = useQuery(
    GET_POKEMONS_DETAIL(
      location.pathname.substring(1, location.pathname.length)
    )
  );
  if (loading) return <p>로딩</p>;
  if (error) return <p>에러</p>;
  const { number, name, types, image, weaknesses, evolutions } = data.pokemon;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          title={`${number} - ${name}`}
          className={classes.cardMedia}
          image={image}
        >
          <img src={image} className={classes.pokemonImage} />
        </CardMedia>
        <CardContent>
          <div className={classes.chip}>
            {types.map((type: any, index: any) => (
              <Chip key={index} className={classes.chip} label={type}>
                />
              </Chip>
            ))}
            <div></div>
            {weaknesses.map((type: any, index: any) => (
              <Chip key={index} className={classes.chip} label={type}>
                />
              </Chip>
            ))}
          </div>
          <PokemonEvolution
            evolutions={(evolutions as PokemonRowProps) || null}
          />
        </CardContent>
      </CardActionArea>
      {/* <CardMedia
        overlay={
          <CardTitle
            title={`${number} - ${name}`}
            subtitle={types.join(", ")}
          />
        }
        style={styles.cardMedia}
      >
        <img src={image} style={styles.pokemonImage} />
      </CardMedia> */}
      {/* <CardText>
        <div style={styles.chips}>
          {types.map((type, index) => (
            <Chip key={index} style={styles.chip}>
              {type}
            </Chip>
          ))}
        </div>
        <div style={styles.chips}>
          {weaknesses.map((weakness, index) => (
            <Chip key={index} style={styles.chip}>
              {weakness}
            </Chip>
          ))}
        </div>
        <PokemonEvolution evolutions={evolutions || null} />
      </CardText>
      <CardActions style={styles.cardActions}>
        <FlatButton
          label="Back"
          onTouchTap={() => this.props.router.goBack()}
        />
      </CardActions> */}
    </Card>
  );
};

export default PokemonDetail;
