import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import profileImg from "../Assets/profileImg.jpg";
import Coins from "../Assets/coins.png";
import Coin from "../Assets/dollar.png";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

export default function Account(props) {
  const [rewards, setRewards] = useState(1024);

  return (
    <div className="bg-slate-100 flex flex-col min-h-screen min-w-screen overflow-x-hidden">
      <Navbar />
      <div className="bg-violet-600 h-[20vh] drop-shadow-2xl shadow-lg z-1"></div>
      <div className="flex-grow flex justify-center items-start mt-[-9vw] z-10 mb-6">
        <div>
          <div className="h-[100vh] bg-white w-[70vw] ml-40 mt-10 mb-10 rounded-lg shadow-xl p-6">
            <h1 className="text-3xl font-semibold mt-10 mb-6">My details</h1>
            <Divider
              flexItem={true}
              sx={{
                backgroundColor: "#696969",
              }}
            />
            <div className="mt-6">
              <h1 className="text-xl font-semibold mt-6">
                Your Profile Picture
              </h1>
              <div className="flex items-center">
                <img src={profileImg} alt="..." className="w-72 rounded-full" />
                <form action="/account" method="POST">
                  <Button
                    variant="contained"
                    component="label"
                    size="small"
                    style={{
                      backgroundColor: "indigo",
                      marginBottom: "2em",
                      width: "12em",
                      height: "3em",
                    }}
                  >
                    Choose Image
                    <input
                      type="file"
                      name="multipleQues"
                      id="multipleQues"
                      hidden
                    />
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    style={{
                      backgroundColor: "indigo",
                      marginTop: "2.5em",
                      marginLeft: "2em",
                      marginBottom: "4.4em",
                      width: "12em",
                      height: "3em",
                    }}
                  >
                    Save Changes
                  </Button>
                </form>
              </div>
              <Divider
                flexItem={true}
                sx={{
                  backgroundColor: "#696969",
                }}
              />
            </div>
            <h2 className="text-xl font-semibold mt-6">Personal Information</h2>
            <form action="/account" method="POST">
              <div className="flex flex-wrap justify-evenly items-start mt-6">
                <div className="flex flex-col justify-center items-start">
                  <div className="flex flex-col justify-center items-start mb-6">
                    <label htmlFor="fName" className="mb-1">
                      First Name
                    </label>
                    <TextField
                      id="fName"
                      placeholder="First Name"
                      variant="outlined"
                      size="small"
                      InputLabelProps={{ shrink: false }}
                    />
                    <label htmlFor="lName" className="mt-6 mb-1">
                      Last Name
                    </label>
                    <TextField
                      id="lName"
                      placeholder="Last Name"
                      variant="outlined"
                      size="small"
                      InputLabelProps={{ shrink: false }}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <label htmlFor="email" className="mb-1">
                      Email
                    </label>
                    <TextField
                      id="email"
                      placeholder="Email"
                      variant="outlined"
                      size="small"
                      InputLabelProps={{ shrink: false }}
                    />
                    <label htmlFor="mobile" className="mt-6 mb-1">
                      Mobile No.
                    </label>
                    <TextField
                      id="mobile"
                      placeholder="Mobile No."
                      variant="outlined"
                      size="small"
                      InputLabelProps={{ shrink: false }}
                    />
                  </div>
                </div>
                <Divider
                  flexItem={true}
                  sx={{
                    backgroundColor: "#696969",
                    height: "15em",
                  }}
                  orientation="vertical"
                />
                <div className="flex flex-col justify-center items-start justify-self-center">
                  <label htmlFor="institute" className="mb-1">
                    Institute
                  </label>
                  <TextField
                    id="institute"
                    placeholder="Institute"
                    variant="outlined"
                    size="small"
                    InputLabelProps={{ shrink: false }}
                    style={{ width: "50vw" }}
                  />
                  <label htmlFor="location" className="mt-6 mb-1">
                    Location
                  </label>
                  <TextField
                    id="location"
                    placeholder="Location"
                    variant="outlined"
                    size="small"
                    InputLabelProps={{ shrink: false }}
                    style={{ width: "50vw" }}
                  />
                </div>
              </div>
              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "indigo",
                  marginTop: "2.5em",
                  marginLeft: "2em",
                }}
              >
                Save Changes
              </Button>
            </form>
          </div>
        </div>
        <div className="mr-20 mt-5">
          <div className="h-[26vh] bg-white w-[21vw] ml-10 mt-6 mb-10 mr-20 rounded-lg shadow-xl p-6 flex flex-col items-center">
            <div className="mr-40 flex">
              <h1 className="text-xl font-semibold inline">Your Rewards</h1>
              <img src={Coins} alt="" className="w-7 inline-block ml-6" />
            </div>
            <div className="mt-10 flex items-center">
              <span className="text-3xl font-semibold mr-3">{rewards}</span>
              <img src={Coin} alt="..." className="w-10 inline-block" />
            </div>
            <div className="h-[0.05em] w-full bg-slate-700 mt-6"></div>
            <div className="flex mt-7">
              <h1 className="text-xl font-medium mr-6">Want More Coins?</h1>
              <form action="/upload">
                <Button
                  variant="contained"
                  type="submit"
                  size="small"
                  style={{
                    backgroundColor: "indigo",
                    width: "12em",
                    height: "3em",
                  }}
                >
                  Contribute
                </Button>
              </form>
            </div>
          </div>
          {/* <div className="h-[35vh] bg-white w-[20vw] ml-10 mt-6 mb-10 mr-20 rounded-lg shadow-xl p-6"></div> */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
