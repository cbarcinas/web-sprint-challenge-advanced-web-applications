//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in

import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(renderProps) => {
        if (localStorage.getItem("token")) {
          return <Component {...renderProps} />;
        } else {
          // if the token doesnt exist in local storage, we'll redirect to home,
          // which in this application is our Login component
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
