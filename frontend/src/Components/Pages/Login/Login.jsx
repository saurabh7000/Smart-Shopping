import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import MetaData from "../../Layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loginAction } from "../../../Redux/Actions/userAction";
import swal from "sweetalert"

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault()
    dispatch(loginAction(email, password));
  
  };

  const {error,isAuthenticated,loading} = useSelector(state => state.login)

  useEffect(() => {
   if(error){
    swal("Error",error,'error');
    dispatch(clearErrors())
    navigate("/login")
   }
   if(isAuthenticated){
    swal("Success","Logged In Successfully !", "success");
    navigate("/");
   }
  }, [dispatch,isAuthenticated,error])
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
        <Typography variant="h4" sx={{ padding: "1rem" }}>
          Login
        </Typography>

        <TextField
          variant="filled"
          label="Email"
          type="email"
          sx={{ margin: "0.5rem" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          sx={{ margin: "0.5rem" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ margin: "0.5rem" }}
          onClick={handleSignIn}
        >
          Log In
        </Button>
        <Typography sx={{ margin: "0.1rem", fontSize: "small" }}>
          {" "}
          <Link to={"/forgot/password"}>Forgot Password ?</Link>
        </Typography>
        <Typography
          sx={{
            fontSize: "medium",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "12rem",
          }}
        >
          Don't have an account ? <Link to="/register"> Create Account</Link>
        </Typography>
      </form>
    </Box>
  );
};

export default Login;
