import React, { Component, Fragment, useState } from "react";
import Avatar from "@mui/material/Avatar";
import navLogo from "../Assets/Study-Icon.webp";
import navLogo2 from "../Assets/prashna-logo.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

export default function DashBoardNav(props) {
  const preventDefault = (event) => event.preventDefault();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [sideBtn, setSidebtn] = useState(false);

  const handleClickSide = (event) => {
    if (sideBtn) {
      setSidebtn(false);
      props.parentCallback(sideBtn);
    } else {
      setSidebtn(true);
      props.parentCallback(sideBtn);
    }
  };

  return (
    <div className="bg-white relative shadow">
      <div className="h-16 flex justify-between items-center ml-5">
        <div>
          <Button
            id="menuBtn"
            disableFocusRipple="true"
            disableRipple="true"
            onClick={handleClickSide}
          >
            <MenuIcon></MenuIcon>
          </Button>
        </div>
        <div className="flex justify-evenly items-center mr-[11vw]">
          <form action="#">
            <TextField
              id="standard-basic"
              name="searchDash"
              placeholder="Search"
              variant="standard"
              style={{ width: "40vw", color: "black" }}
            />
            <button className="ml-4" type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center">
          <a href="/">
            <h1 className="text-xl font-semibold mr-20">Home</h1>
          </a>
          <button className="text-xl mr-10">
            <EmojiEventsRoundedIcon></EmojiEventsRoundedIcon>
          </button>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            disableRipple
            style={{
              backgroundColor: "transparent",
              marginRight: "2em",
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
