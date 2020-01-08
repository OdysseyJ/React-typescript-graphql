import React from "react";
import AuthForm from "../components/auth/AuthForm";
import Header from "../components/layout/Header";
import AuthRouter from "../routes/AuthRouter";

const Auth = () => {
  return (
    <div>
      <Header></Header>
      <AuthRouter></AuthRouter>
    </div>
  );
};

export default Auth;
