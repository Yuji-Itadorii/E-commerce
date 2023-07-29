import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../layout/Loader/Loader";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  // console.log(user.role);

  // if (
  //   loading === false &&
  //   isAdmin &&
  //   isAuthenticated &&
  //   user.role !== "admin"
  // ) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : isAuthenticated ? (
        children
      ) : (
        <Navigate to="/login" />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
