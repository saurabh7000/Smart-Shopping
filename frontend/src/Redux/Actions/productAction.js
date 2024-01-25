import axios from "axios";
import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
} from "../Constants/productContant";

export const getProduct =
  (keyword, category, price, rating, currentPage) =>
  //keyword = "", rating = 0, price = [0, 50000], category,
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCTS_REQUEST });
      let link = `/api/v1/allProducts?page=${currentPage}&keyword=${keyword}`;

      if (category) {
        link = `/api/v1/allProducts?page=${currentPage}&category=${category}&keyword=${keyword}`;
      }

      const { data } = await axios.get(link);

      //&rating[gte]=${rating}&price[gte]=${price[0]}&price[lte]=${price[1]}
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data.message);
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAIL_REQUEST,
    });

    const { data } = await axios.get(`/api/v1/product/details/${id}`);

    dispatch({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload: error.response.data.message,
    });
  }
};
