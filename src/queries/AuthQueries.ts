import gql from "graphql-tag";

// TYPES

export type UserInput = {
  email: string;
  password: string;
};

// FRAGMENTS

export const USER_FRAGMENT = gql`
  fragment User on User {
    id
    email
    jwt
  }
`;

// QUERIES

export const GET_USER_TEST = gql`
  query getUserTest($email: String!) {
    getUserTest(email: $email) {
      id
      email
    }
  }
`;

export const GET_USER = gql`
  query getUser {
    getUser {
      id
      email
    }
  }
`;

export const LOGIN_USER = gql`
  query loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      id
      email
      jwt
    }
  }
`;

// MUTATIONS

export const CREATE_USER = gql`
  mutation createUser($createUserData: UserInput) {
    createUser(data: $createUserData) {
      id
      email
    }
  }
`;
