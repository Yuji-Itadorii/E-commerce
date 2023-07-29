import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProducts } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { useRanger } from "react-ranger";
import ReactStars from "react-rating-stars-component";
import MetaData from "../layout/MetaData";

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { keyword } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [values, setValues] = React.useState([10000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const setCurrentPageNo = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const options = {
    value: Number(ratings),
    readOnly: true,
    precision: 0.5,
    onChange: (newValue) => {
      setRatings(newValue);
    },
  };
  // console.log(ratings);

  const { loading, products, error, productCount, resultPerPage } = useSelector(
    (state) => state.products
  );

  const { getTrackProps, handles } = useRanger({
    values,
    onChange: setValues,
    min: 0,
    max: 25000,
    stepSize: 5,
  });
  const price = values[0];
  // console.log("price", price);

  // console.log(price);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProducts(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Product" />

          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {keyword && (
            <div className="filterBox">
              <p>Price</p>
              <div className="priceRangeValue">
                <span>{price}</span>
              </div>

              <div
                {...getTrackProps({
                  style: {
                    height: "4px",
                    background: "#ddd",
                    boxShadow: "inset 0 1px 2px rgba(0,0,0,.6)",
                    borderRadius: "2px",
                  },
                })}
              >
                {handles.map(({ getHandleProps }) => (
                  <div
                    {...getHandleProps({
                      style: {
                        width: "12px",
                        height: "12px",
                        borderRadius: "100%",
                        background:
                          "linear-gradient(to bottom, #eee 45%, #ddd 55%)",
                        border: "solid 1px #888",
                      },
                    })}
                  />
                ))}
              </div>

              <p className="CategoryHeading"> Categories</p>
              <ul className="categoryBox">
                {categories.map((category) => (
                  <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>

              <div className="ratings CategoryHeading">
                <p>Rating Above</p>
                <ReactStars {...options} />
              </div>
            </div>
          )}

          {resultPerPage <= productCount && (
            <div className="pagination">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCount ? productCount : 8}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
