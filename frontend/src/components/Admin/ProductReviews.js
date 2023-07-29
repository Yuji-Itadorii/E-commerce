import React, { Fragment, useEffect } from "react";
import "./ProductReviews.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteReviews,
  getAllReviews,
} from "../../actions/productAction";
import { Button } from "@material-ui/core";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import SideBar from "./Sidebar";
import { DELETE_REVIEW_RESET } from "../../constants/productConstants";

const ProductReviews = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const [productId, setProductId] = React.useState("");

  const { error, reviews, loading } = useSelector(
    (state) => state.productReviews
  );

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.review
  );

  const deleteReviewHandler = (id) => {
    dispatch(deleteReviews(id, productId));
    dispatch(getAllReviews(productId));
  };

  const productReviewsSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getAllReviews(productId));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Review Deleted Successfully");
      navigate("/admin/reviews");
      dispatch({ type: DELETE_REVIEW_RESET });
    }
  }, [dispatch, alert, error, deleteError, navigate, isDeleted]);

  return (
    <Fragment>
      <MetaData title={`ALL REVIEWS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <form
            className="productReviewsForm"
            onSubmit={productReviewsSubmitHandler}
          >
            <h1 className="productReviewsFormHeading">ALL REVIEWS</h1>

            <div>
              <FontAwesomeIcon icon={faStar} />
              <input
                type="text"
                placeholder="Product Id"
                required
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={
                loading ? true : false || productId === "" ? true : false
              }
            >
              Search
            </Button>
          </form>

          {reviews && reviews.length > 0 ? (
            <table className="productListTable">
              <thead>
                <tr>
                  <th>Review-Id</th>
                  <th>User</th>
                  <th>Comment</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {reviews &&
                  reviews.map((review) => (
                    <tr key={review._id}>
                      <td>{review._id}</td>
                      <td>{review.name}</td>
                      <td>{review.comment}</td>
                      <td>{review.rating}</td>

                      <td>
                        <Button
                          className="icon"
                          onClick={() => deleteReviewHandler(review._id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <h1 className="productReviewsFormHeading">No Reviews Found</h1>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductReviews;
