import React, { useEffect, useState } from "react";
import "./Main.scss";
import Card from "../../Layout/Card/Card";
import Filter from "../../Layout/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Redux/Actions/productAction";
import Pagination from "@mui/material/Pagination";
import { usePagination } from "../../Layout/Pagination/usePagination";
import MetaData from "../../Layout/MetaData";
const Main = () => {
  const dispatch = useDispatch();

  const { products, productsCount } = useSelector((state) => state.products);

  const [totalPages] = usePagination(8, productsCount);

  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    dispatch(getProduct("", 0, 0, pageNo));
  }, [dispatch, pageNo]);

  return (
    <div className="main-container">
      <MetaData title="Home" />
      <div className="filter-container">
        <Filter />
      </div>
      <div>
        <div className="allCard-container">
          {products &&
            products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
        </div>

        <div className="pagination-container">
          <Pagination
            color="primary"
            count={totalPages}
            page={pageNo}
            onChange={(e, value) => {
              setPageNo(value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
