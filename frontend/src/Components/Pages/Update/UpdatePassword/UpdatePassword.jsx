import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import MetaData from "../../../Layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { clearErrors, updatePasswordAction } from "../../../../Redux/Actions/userAction";
import swal from "sweetalert";


const UpdatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const{loading,error} = useSelector(state => state.updatePassword)
 
  const handleUpdate = (e) => {
    e.preventDefault();
   dispatch(updatePasswordAction(oldPassword, newPassword, confirmPassword));
   swal("Success","Password Updated Successfully !", "success");
 navigate("/profile");
  };
  const handleBack = () => {
    navigate("/profile");
  };
useEffect(() => {
 if(error){
  swal("Error",error,'error');
  dispatch(clearErrors())
  navigate("/profile")
 }
 
}, [error,dispatch])


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
      <MetaData title={"Update-Password"} />

      <form className="form">
        <Typography variant="h4" sx={{ padding: "1rem" }}>
          Update Password
        </Typography>
        <TextField
          label="Old Password"
          variant="filled"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <TextField
          variant="filled"
          label="New Password"
          type="password"
          sx={{ margin: "0.5rem" }}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
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
            color="error"
            sx={{
              margin: "0.5rem",
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            onClick={handleBack}
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{ margin: "0.5rem" }}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UpdatePassword;
