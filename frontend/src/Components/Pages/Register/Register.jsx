import React, { useEffect, useState } from "react";
import "./Register.scss";
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../../Layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { registerAction,clearErrors, } from "../../../Redux/Actions/userAction";
import swal from 'sweetalert'

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
   dispatch(registerAction(name, email, password));
  
  };

  const {error,isRegistered,loading} = useSelector(state => state.register)

  useEffect(() => {
   if(error){
    swal("Error",error,'error');
    dispatch(clearErrors())
    navigate("/register")
   }
   if(isRegistered){
    swal("Success","Registered Successfully !", "success");
    navigate("/login")
   }
  }, [dispatch,isRegistered,error])
  
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
      <MetaData title={"Register"} />
   
      <form className="form">
        <Typography variant="h4" sx={{ padding: "1rem" }}>
          Sign Up
        </Typography>
        <TextField
          label="Name"
          variant="filled"
          type="text"
          sx={{ margin: "0.5rem" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <Typography sx={{}} >
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </form>
     
    </Box>
  );
};

export default Register;
