import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import useStyles from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import decode from 'jwt-decode';
const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  //     console.log(user);
  const navigate = useNavigate();
  const classes = useStyles();
  const location = useLocation();

  const logOut = () => {
    setUser(localStorage.clear());
    navigate("/auth");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          variant="h2"
          align="center"
          className={classes.heading}
        >
          {" "}
          Memorize{" "}
        </Typography>
        <img
          src={`https://images.unsplash.com/photo-1496262967815-132206202600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bm90ZSUyMHBhZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
          height="60"
          width=""
          style={{ marginTop: "5px", alignItems: "center", marginLeft: "10px" }}
          alt="Memoriz"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.avator}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.Username}>
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              onClick={logOut}
            >
              {" "}
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth">
            {" "}
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
