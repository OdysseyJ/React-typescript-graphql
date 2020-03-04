import React from "react";
import Header from "../components/layout/Header";
import AuthRouter from "../routes/AuthRouter";
import { useQuery } from "@apollo/react-hooks";

const Auth = () => {
  return (
    <div>
      <Header></Header>
      <AuthRouter></AuthRouter>
    </div>
  );
};

export default Auth;
