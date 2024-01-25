import React from "react";
import "./Header.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const handleClick= () =>{
    navigate("/")
  }
  const handleAccount = () =>{
    navigate("/profile")
  }
  const cartHandler = () =>{
    navigate("/cart")
  }
  return (
    <div className="header-container">
      <div className="logo-container" onClick={handleClick}>
        <ShoppingCartIcon
          sx={{
            fontSize: "2rem",
            margin: "0.5rem",
          }}
        />
        <h3>Smart Shopping</h3>
      </div>
      <div className="search-container">
        <input type="text" placeholder="search" />
        <button>
          <SearchIcon
            sx={{
              fontSize: "2rem",
              margin: "0.1rem",
            }}
          />
        </button>
      </div>
      <div className="icons">
        <button onClick={cartHandler}>
          <ShoppingCartIcon
            sx={{
              fontSize: "2rem",
            }}
          />
        </button>
        <button onClick={handleAccount}>
          <AccountCircleSharpIcon
            sx={{
              fontSize: "2rem",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
