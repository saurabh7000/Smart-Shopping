import React, { Fragment } from "react";
import "./Cart.scss";
import "./CartItems";
import CartItems from "./CartItems";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const checkOutHandler = () => {
    navigate("/shipping");
  };
  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="Empty">
          <RemoveShoppingCartIcon
            sx={{ fontSize: "10rem", margin: "1rem", color: "#f0d043" }}
          />
          <Typography sx={{ fontSize: "2rem", margin: "2rem" }}>
            No Product in your Cart
          </Typography>
          <Link to={"/"} Style={{ color: "red" }}>
            View Products
          </Link>
        </div>
      ) : (
        <Fragment>
          <div className="cart-container">
            <div className="cart-header">
              <p>Product</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            <div className="cart-items">
              {cartItems &&
                cartItems.map((item) => {
                  return <CartItems key={item.product} item={item} />;
                })}
            </div>
            <div className="total-container">
              <div className="price">
                <Typography>Gross Total</Typography>
                <Typography>{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</Typography>
              </div>
              <Button
                variant="contained"
                sx={{
                  width: "8rem",
                }}
                onClick={checkOutHandler}
              >
                Check Out
              </Button>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
