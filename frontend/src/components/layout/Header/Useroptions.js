import React, { Fragment } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCartShopping,
  faUser,
  faRightFromBracket,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userActions";
import { Backdrop } from "@material-ui/core";

const Useroptions = ({ user }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { cartItems } = useSelector((state) => state.cart);

  const options = [
    {
      icon: <FontAwesomeIcon icon={faCartShopping} />,
      name: "Orders",
      func: orders,
    },
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      name: "Profile",
      func: account,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faShoppingBasket}
          style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        />
      ),
      name: `Cart (${cartItems.length})`,
      func: cart,
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      name: "Logout",
      func: logoutUser,
    },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <FontAwesomeIcon icon={faHouse} />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    navigate("/admin/dashboard");
  }

  function cart() {
    navigate("/cart");
  }

  function orders() {
    navigate("/orders");
  }

  function account() {
    navigate("/account");
  }

  function logoutUser() {
    dispatch(logout());
    alert.success("Logged out successfully");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className="speedDial"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="user"
          />
        }
        open={open}
        direction="down"
      >
        {options.map((option) => (
          <SpeedDialAction
            key={option.name}
            icon={option.icon}
            tooltipTitle={option.name}
            onClick={option.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default Useroptions;
