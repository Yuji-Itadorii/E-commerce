import React from "react";
import "./Sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPlus,
  faArrowsLeftRight,
  faList,
  faPeopleGroup,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <FontAwesomeIcon icon={faUser} />
          Dashboard
        </p>
      </Link>
      <div className="products">
        <p>Products</p>
        <Link to="/admin/product">
          <p>
            <FontAwesomeIcon icon={faPlus} />
            Create
          </p>
        </Link>
        <Link to="/admin/products">
          <p>
            <FontAwesomeIcon icon={faArrowsLeftRight} />
            All
          </p>
        </Link>
      </div>

      <Link to="/admin/orders">
        <p>
          <FontAwesomeIcon icon={faList} />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <FontAwesomeIcon icon={faPeopleGroup} />
          Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <FontAwesomeIcon icon={faStar} />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
