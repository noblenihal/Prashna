import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen min-w-screen overflow-x-hidden">
      <Navbar />
      <div className="flex-grow">
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-violet-700 to-fuchsia-600 h-[75vh] relative drop-shadow-2xl mb-20 shadow-md">
          <h1 className="ml-4 text-5xl subpixel-antialiased tracking-wide leading-5 break-words font-extrabold text-[#2E0249]">
            Generate Your Own Question Paper
          </h1>
          <p className="mt-10 ml-5 text-[#2E0249] font-semibold text-xl subpixel-antialiased tracking-wide leading-5">
            Helps you generate question papers for student and teachers.
          </p>
          <form action="/signup">
            <Button
              variant="contained"
              style={{
                width: "9vw",
                height: "3.5em",
                color: "white",
                borderColor: "white",
                backgroundColor: "#2E0249",
                marginTop: "2em",
                marginLeft: "1.5em",
                fontWeight: "bold",
              }}
              type="submit"
            >
              Get Started
            </Button>
          </form>
        </div>
        <div className="flex justify-around h-[30vh] min-h-full mb-20">
          <div className="bg-generator-img w-[30vw] min-w-[30vw] pt-10 pl-10 ml-20">
            <h1 className="text-2xl font-semibold mb-4">
              Question Paper Generator
            </h1>
            <p className="text-lg font-normal mb-12">
              Generates the desired question paper for Teachers.
            </p>
            <form action="/dashboard">
              <Button
                variant="contained"
                style={{ backgroundColor: "#14C38E" }}
                type="submit"
              >
                Generate
              </Button>
            </form>
          </div>
          <div className="bg-uploader-img w-[30vw] min-w-[30vw] pt-10 pl-10 mr-20">
            <h1 className="text-2xl font-semibold mb-4">Upload Question</h1>
            <p className="text-lg font-normal mb-12">
              Upload the questions for the community.
            </p>
            <form action="/upload">
              <Button
                variant="contained"
                style={{ backgroundColor: "#14C38E" }}
                type="submit"
              >
                Upload
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
