import React, {useEffect} from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...props }) => {
  useEffect(()=>{
    if (!props.loggedIn) {
    props.signInRedirect()
  }})
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to='/'  />
      }
    </Route>
  );
};
