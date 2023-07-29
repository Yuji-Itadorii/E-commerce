import React, { Fragment, useEffect } from "react";
import "./MyOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
// import { DataGrid } from "@mui/x-data-grid";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const MyOrders = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - Orders`} />
      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          {orders && orders.length > 0 ? (
            <div className="myOrdersTable">
              <div className="myOrdersTableHeading">
                <p>My Orders</p>
              </div>
              <div className="myOrdersTableBody">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Status</th>
                      <th>Items Qty</th>
                      <th>Amount</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders &&
                      orders.map((order) => (
                        <tr key={order._id}>
                          <td>{order._id}</td>
                          <td>{order.orderStatus}</td>
                          <td>{order.orderItems.length}</td>
                          <td>Rs.{order.totalPrice}</td>
                          <td>
                            <Link to={`/order/${order._id}`}>
                              <FontAwesomeIcon icon={faLocationArrow} />
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="myOrdersEmpty">
              <p>You have no orders yet.</p>
              <Link to="/products">Go to Products</Link>
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
