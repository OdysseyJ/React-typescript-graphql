import React from "react";

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  lastEvolutionWarning: {
    margin: 7
  }
};

export type PokemonEvolutionProps = {
  evolutions: any;
};

export type EvolutionProps = {
  id: string;
  name: string;
  number: string;
  image: string;
};
const PokemonEvolution = ({ evolutions }: PokemonEvolutionProps) => {
  return (
    <div>
      {evolutions ? (
        <List>
          <div>Evolutions</div>

          {evolutions.map((evolution: EvolutionProps) => (
            <ListItem key={evolution.id}>
              <ListItemAvatar>
                <Avatar src={evolution.image}></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${evolution.number} - ${evolution.name}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <div style={styles.lastEvolutionWarning}>
          This is the last evolution
        </div>
      )}
    </div>
  );
};

export default PokemonEvolution;
