import React, { useEffect, useState } from "react";
import "./Filter.scss";
import { Checkbox, Link, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { getProduct } from "../../../Redux/Actions/productAction";

const Filter = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState([0, 1000000]);
  const [rating, setRating] = useState(0);

  const handleCategoryChange = (value) => () => {
    setCategory(value);
  };

  const handlePriceChange = (min, max) => () => {
    setPrice([min, max]);
  };

  const handleRatingChange = (value) => () => {
    setRating(value);
  };

  useEffect(() => {
    dispatch(getProduct("",category, price, rating, 1));
  }, [dispatch, category, price, rating]);

  return (
    <div className="filter-container">
      <div className="clear">
        <Typography variant="h4"> Filters </Typography>
        <Link href="/" underline="none">
          <Typography variant="h5" sx={{ color: "red" }}>
            Clear All
          </Typography>
        </Link>
      </div>
      <div className="category-container">
        <Typography variant="h5">Category</Typography>
        <Typography variant="h6">
          <Checkbox onChange={handleCategoryChange("mobile")} />
          Mobiles
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handleCategoryChange("laptop")} />
          Laptop
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handleCategoryChange("computer")} />
          Desktop & Computers
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handleCategoryChange("computer-accessory")} />
          Computers Accessories
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handleCategoryChange("home")} />
          Home Appliances
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handleCategoryChange("kitchen")} />
          Kichen Appliances
        </Typography>
      </div>
      <div className="price-container">
        <Typography variant="h5">Price</Typography>

        <Typography variant="h6">
          <Checkbox onChange={handlePriceChange(0, 10000)} />
          0-10000
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handlePriceChange(10000, 15000)} />
          10000-15000
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handlePriceChange(15000, 20000)} />
          15000-20000
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handlePriceChange(20000, 25000)} />
          20000-25000
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handlePriceChange(25000, 30000)} />
          25000-30000
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handlePriceChange(30000, 1000000)} />
          30000 to above
        </Typography>
      </div>
      <div className="rating-container">
        <Typography variant="h5">Rating</Typography>

        <Typography variant="h6">
          <Checkbox onChange={handleRatingChange(0)} />
          0-1 star
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handleRatingChange(1)} />
          1-2 star
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handleRatingChange(2)} />
          2-3 star
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handleRatingChange(3)} />
          3-4 star
        </Typography>
        <Typography variant="h6">
          <Checkbox onChange={handleRatingChange(4)} />
          4-5 star
        </Typography>
      </div>
    </div>
  );
};

export default Filter;
