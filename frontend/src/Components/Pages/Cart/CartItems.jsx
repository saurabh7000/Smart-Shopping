import React from "react";
import "./CartItems.scss";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction, removeCartItemAction} from "../../../Redux/Actions/cartAction";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();

  const increseQuantity = (id, quantity, stock) => () => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addToCartAction(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => () => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addToCartAction(id, newQty));
  };

  const deleteCartItem = (id) => () =>{
    dispatch(removeCartItemAction(id))
  }

  
  return (
    <div className="cartItem-container">
      <div className="product">
        <img src={item.image} alt="" />
        <Link to={`/product-detail/${item.product}`}>{item.name}</Link>
      </div>
      <div className="quantity">
        <Button onClick={decreaseQuantity(item.product, item.quantity)}>
          <RemoveIcon />
        </Button>
        <Typography>
          {item.quantity}
        </Typography>
        <Button
          onClick={increseQuantity(item.product, item.quantity, item.stock)}
        >
          <AddIcon />
        </Button>
      </div>
      <div className="price">
        <p>{`Price: ₹${item.price}`}</p>
      </div>
      <Button color="error" onClick={deleteCartItem(item.product)}>
        remove
      </Button>
    </div>
  );
};

export default CartItems;
