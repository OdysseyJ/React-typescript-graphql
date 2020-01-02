import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { type } from "os";

const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;

type Continent = {
  code: string;
  name: string;
};

const Continents = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!(</p>;
  return (
    <ul>
      {data.continents.map(({ code, name }: Continent) => (
        <li key={code}>
          {code}
          {name}
        </li>
      ))}
    </ul>
  );
};

export default Continents;
