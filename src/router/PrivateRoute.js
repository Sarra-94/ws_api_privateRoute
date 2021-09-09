import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ path, component: Component, isAuth, ...props }) => {
  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Route path={path} render={() => <Component {...props} />} />
    </div>
  );
};

export default PrivateRoute;
