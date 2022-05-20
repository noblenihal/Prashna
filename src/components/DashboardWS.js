import React from "react";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function DashboardWS() {
  return (
    <div>
      <div className="flex-grow">
        <div className="flex justify-center items-start">
          <div className="flex flex-col">
            <div className="h-[75vh] bg-white w-[60vw] ml-10 mt-6 mb-4 rounded-3xl shadow-md">
              <h1></h1>
            </div>
          </div>
          <div>
            <div className="h-[25vh] bg-white w-[20vw] ml-10 mt-6 mb-10 mr-10 rounded-3xl shadow-md p-6 flex flex-col items-center">
              <h1 className="text-2xl font-semibold mb-6">
                Generate Your Paper Using AI
              </h1>
              <Divider flexItem={true} />
              <form action="/generate" className="mt-20">
                <Button
                  variant="contained"
                  type="submit"
                  style={{ backgroundColor: "indigo" }}
                >
                  Generate
                </Button>
              </form>
            </div>
            <div className="h-[25vh] bg-white w-[20vw] ml-10 mt-6 mb-10 mr-10 rounded-3xl shadow-md p-6 flex flex-col items-center">
              <h1 className="text-2xl font-semibold mb-6">
                Upload Your Questions
              </h1>
              <Divider flexItem={true} />
              <form action="/upload" className="mt-20">
                <Button
                  variant="contained"
                  type="submit"
                  style={{ backgroundColor: "indigo" }}
                >
                  Upload
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
