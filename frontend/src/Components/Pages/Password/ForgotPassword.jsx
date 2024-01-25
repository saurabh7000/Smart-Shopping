import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../../Layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  forgotPasswordAction,
} from "../../../Redux/Actions/userAction";
import swal from "sweetalert";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const { loading, error,message } = useSelector((state) => state.forgotPassword);

  const handleButton = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordAction(email));
  };

  useEffect(() => {
    if (error) {
      swal("Error", error, "error");
      dispatch(clearErrors());
    }
    if(message){
        swal("Success",message,"success")
    }
  },[dispatch,error,message]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        overflowY: "hidden",
      }}
    >
      <MetaData title={"Login"} />
      <form className="form">
        <Typography variant="h4" sx={{ padding: "2rem" }}>
          Forgot Password
        </Typography>

        <TextField
          variant="filled"
          label="Email"
          type="email"
          sx={{ margin: "1rem" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{ margin: "1rem",marginBottom:"2rem"}}
          onClick={handleButton}
        >
         Send
        </Button>
      </form>
    </Box>
  );
};

export default ForgotPassword;
