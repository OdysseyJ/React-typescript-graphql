import gql from "graphql-tag";

export const GET_POKEMONS = (count: number) => gql`
  query {
    pokemons(first: ${count}, ) {
      id
      number
      name
      image
      types
    }
  }
`;
