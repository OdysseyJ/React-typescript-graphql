import gql from "graphql-tag";

export const GET_POKEMONS_FOR_LIST = (count: number, category: string) => gql`
  query {
    pokemons(first: ${count}) {
      id
      number
      name
      image
      types
    }
  }
`;

export const GET_POKEMONS_DETAIL = (name: string) => gql`
  query {
    pokemon(name: "${name}") {
      number
      name
      image
      types
      weaknesses
      evolutions {
        id
        name
        number
        image
      }
    }
  }
`;
