import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import { logoutAction } from "../../../Redux/Actions/userAction";
import swal from "sweetalert"

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const{user} = useSelector(state => state.login)

  const handleLogOut = () => {
   dispatch(logoutAction())
   swal("Success","Logged Out Successfully","success")
   navigate("/")
  };

  const handleUpdatePassword = () => {
    navigate(`/update/password`);
  };

  return (
    <div className="root">
      <div className="dp-image">
        <img
          src={user.image}
          alt="Profile"
        />
      </div>
      <div className="info">
        <div className="name">
          <h4>Name :- </h4>
          <h4>{user.name}</h4>
        </div>
        <div className="email">
          <h4>Email :- </h4>
          <h4>{user.email}</h4>
        </div>
      </div>
      <div className="order">
        <h1>My Orders</h1>
        <ul>
          <li>good</li>
          <li>good</li>
          <li>good</li>
          <li>good</li>
          <li>good</li>
          <li>good</li>
        </ul>
      </div>
      <div className="buttons">
        <button>
          <h1>Edit Profile</h1>
        </button>
        <button onClick={handleUpdatePassword}>
          <h1>Update Password</h1>
        </button>
        <button className="logout" onClick={handleLogOut}>
          <h1>Log Out</h1>
        </button>
      </div>
    </div>
  );
};

export default Profile;
