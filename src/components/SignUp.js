import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import edImg2 from "../Assets/ed-Img2.jpg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Login() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow justify-center items-center">
        <div className="flex shadow-lg">
          <form
            className="h-[50vh] w-[25vw] bg-white flex flex-col justify-center items-center rounded-l-2xl"
            action="/signup"
            method="POST"
          >
            <h1 className="font-semibold text-2xl">Sign Up</h1>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "20vw" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="name"
                label="Name"
                variant="standard"
                size="Normal"
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "20vw" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="username"
                label="Username"
                variant="standard"
                size="Normal"
              />
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "20vw" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="standard"
                autoComplete="current-password"
                style={{ marginBottom: "1em" }}
              />
            </Box>
            <div>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember Me"
                sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                style={{ marginRight: "15.65em" }}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              style={{
                width: "20vw",
                marginTop: "1.5em",
                backgroundColor: "#171717",
                borderRadius: "0",
              }}
            >
              Submit
            </Button>
            <p className="mt-10">
              Already have an account?{" "}
              <a href="/login" className="text-cyan-700 underline">
                Login here
              </a>
            </p>
          </form>
          <img
            src={edImg2}
            alt=""
            className="h-[50vh] w-[25vw] rounded-r-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
