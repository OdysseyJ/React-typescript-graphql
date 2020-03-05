import gql from "graphql-tag";

// QUERIES

export const GET_ALERT_OPEN_IN_CACHE = gql`
  query getAlertOpenInCache {
    open @client
    message @client
    type @client
  }
`;

export const GET_ALERT_FUNC_IN_CACHE = gql`
  query getAlertFuncInCache {
    getAlert @client
  }
`;
