import React, { useEffect, useState } from "react";
import "./Product.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../../Redux/Actions/productAction";
import Star from "../../Layout/Star/Star";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCardExchange } from "react-icons/gi";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import swal from "sweetalert";
import MetaData from "../../../Components/Layout/MetaData";
import { addToCartAction } from "../../../Redux/Actions/cartAction";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currImage, setCurrImage] = useState("");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  const { product } = useSelector((state) => state.product);

  console.log(product.stock);

  const increament = () => {
    if (product.stocks <= quantity) return;
    setQuantity(quantity + 1);
  };

  const decreament = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };
  const addToCartHandler = () => {
    dispatch(addToCartAction(id, quantity));
    swal("Success", "Item added to Cart","success");
  };

  useEffect(() => {
    if (product.images && product.images.length > 0 && !currImage) {
      setCurrImage(product.images[0].url);
    }
  }, [product, currImage]);

  const review = (product && product.reviews) || 0;
  const stars = (product && product.ratings) || 0;

  return (
    <div className="product-container">
      <div className="product-detail">
        <MetaData title={"Product-Details"} />
        <div className="image-container">
          <div className="main-image">
            <img src={currImage} alt="" />
          </div>
          <div className="product-images">
            {product.images &&
              product.images.map((item, i) => (
                <figure>
                  <img
                    className="CarouselImage"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                    onClick={(e) => setCurrImage(item.url)}
                  />
                </figure>
              ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="star-container">
            <span className="icon-style">
              <Star star={stars} /> <p>({review.length} Reviews)</p>
            </span>
          </div>
          <h3>{product.price}</h3>
          {product.stock > 0 ? (
            <h4 className="inStock">inStock</h4>
          ) : (
            <h4 className="outStock">outOfStock</h4>
          )}
          <h3>Description</h3>
          <p>{product.description}</p>
          <div className="feature">
            <div className="Icon">
              <TbTruckDelivery size={45} />
              <p>Fast Delivery</p>
            </div>
            <div className="Icon">
              <GiCardExchange size={40} />
              <p>Easy Return or Exchange</p>
            </div>
          </div>
          <div className="buy-section">
            <div className="quantity">
              <Button onClick={decreament}>
                {" "}
                <RemoveIcon />{" "}
              </Button>
              <Typography>{quantity}</Typography>
              <Button onClick={increament}>
                <AddIcon />{" "}
              </Button>
              <Typography>Quantity</Typography>
            </div>
            <div className="buy-cart">
              <button
                className="atc"
                sx={{
                  width: 300,
                  color: "success.main",
                  backgeoundColor: "#e38f2c",
                }}
                onClick={addToCartHandler}
              >
                <Typography>Add to Cart</Typography>
              </button>
             
            </div>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="newReview">
          <button>
            <Typography>Add Review</Typography>
          </button>
        </div>
        <div className="allReviews">
          <div className="review">
            <h4>Name</h4>
            <span className="icon-style">
              <Star star={stars} />
            </span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              praesentium voluptatibus doloremque quo, repudiandae eum soluta,
              minima pariatur hic eius quibusdam? Ad sed quaerat atque
              perferendis molestias animi veritatis ab esse delectus veniam
              reprehenderit dolore excepturi impedit nihil, aliquam est, ullam
              corrupti? Eius neque excepturi assumenda placeat? Magni, numquam
              praesentium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
