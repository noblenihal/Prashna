import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import navLogo from "../Assets/Study-Icon.webp";
import navLogo2 from "../Assets/prashna-logo.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function Navbar() {
  const preventDefault = (event) => event.preventDefault();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="bg-white shadow-sm">
      <div className="h-16 flex justify-between items-center ml-5">
        <div className="h-3/4 ml-6">
          <NavLink to="/">
            <img
              className="w-12 hover:w-[3.12rem] transition-all ease-in-out delay-100"
              src={navLogo2}
              alt=""
            />
          </NavLink>
        </div>
        <div className="flex justify-evenly min-w-[50%] font-medium items-center">
          <NavLink
            to="/"
            className="text-lg antialiased hover:text-violet-800 hover:text-[1.15em] transition-all ease-in-out delay-100"
          >
            Home
          </NavLink>
          <NavLink
            to="/login"
            className="text-lg antialiased hover:text-violet-800 hover:text-[1.15em] transition-all ease-in-out delay-100"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="text-lg antialiased hover:text-violet-800 hover:text-[1.15em] transition-all ease-in-out delay-100"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/upload"
            className="text-lg antialiased hover:text-violet-800 hover:text-[1.15em] transition-all ease-in-out delay-100"
          >
            Contribute
          </NavLink>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            disableRipple
            style={{
              backgroundColor: "transparent",
            }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <form action="/account">
              <button type="submit">
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </button>
            </form>
            <form action="/dashboard">
              <button type="submit">
                <MenuItem onClick={handleClose}>Dashboard</MenuItem>
              </button>
            </form>
            <form action="/login">
              <button type="submit">
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </button>
            </form>
          </Menu>
        </div>
      </div>
    </div>
  );
}
