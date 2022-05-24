import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Divider from "@mui/material/Divider";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function PdfViewer() {
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex">
        <div className="h-[80vh] bg-white w-[50vw] ml-10 mt-6 mb-10 rounded-3xl shadow-md block overflow-auto p-10 pt-8">
          <h1 className="text-2xl break-words font-semibold mb-6 leading-10">
            Search the Questions you want to add in your final Generated
            Question Paper:-
          </h1>
          <Divider flexItem={true} />
          <form action="#" method="POST">
            <div className="mt-7 ml-10 flex justify-center items-center">
              <TextField
                id="standard-basic"
                name="searchQues"
                placeholder="Search"
                variant="outlined"
                style={{ width: "30vw", color: "black" }}
              />
              <button className="ml-4" type="submit">
                <SearchIcon />
              </button>
            </div>
          </form>
          <div></div>
          <form action="/pdf">
            <Button
              variant="contained"
              type="submit"
              style={{
                top: "56.5em",
                left: "40em",
                position: "absolute",
                zIndex: "1000",
                backgroundColor: "indigo",
              }}
            >
              Generate
            </Button>
          </form>
        </div>
        <div className="h-[80vh] bg-white w-[85vw] ml-10 mt-6 mb-10 mr-10 rounded-3xl shadow-md block overflow-auto p-10 pt-8">
          <h1 className="text-center text-2xl font-semibold leading-10">
            Preview
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
