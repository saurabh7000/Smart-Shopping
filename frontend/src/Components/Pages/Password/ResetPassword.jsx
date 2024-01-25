import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import MetaData from "../../Layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import swal from "sweetalert";
import { resetPasswordAction,clearErrors } from "../../../Redux/Actions/userAction";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {loading,error,success} = useSelector(state => state.forgotPassword)

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetPasswordAction(token,password,confirmPassword));
  };
  useEffect(() => {
   if(error){
    swal("Error",error,'error');
    dispatch(clearErrors())
   }
   if(success){
    swal("Success","Password reset successfully !","success");
    navigate("/login")
   }
  }, [dispatch])
  
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
      <MetaData title={"Reset-Password"} />

      <form className="form">
        <Typography variant="h4" sx={{ padding: "1rem" }}>
          Reset Password
        </Typography>

        <TextField
          variant="filled"
          label="New Password"
          type="password"
          sx={{ margin: "0.5rem" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          variant="filled"
          type="password"
          sx={{ margin: "0.5rem" }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Box>
          <Button
            variant="contained"
            
            sx={{ margin: "0.5rem" }}
            onClick={handleReset}
          >
            Reset Password
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ResetPassword;
