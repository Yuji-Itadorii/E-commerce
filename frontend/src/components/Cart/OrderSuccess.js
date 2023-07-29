import React from "react";
import "./OrderSuccess.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <FontAwesomeIcon icon={faCheckCircle} />

      <p>Your Order has been Placed successfully </p>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
