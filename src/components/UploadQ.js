import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function UploadQ() {
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <div className="bg-slate-50 flex flex-col min-h-screen min-w-screen overflow-x-hidden">
      <Navbar />
      <div className="flex flex-grow justify-center items-center">
        <div className="h-[89vh] bg-white w-[85vw] ml-10 mt-10 mb-10 rounded-3xl shadow-md">
          <h1 className="text-center font-bold text-3xl subpixel-antialiased tracking-wide leading-2 mb-6 mt-6">
            Upload Questions
          </h1>
          <Divider flexItem={true} />
          <form
            action="/upload"
            method="POST"
            className="flex flex-col items-center flex-grow"
          >
            <div className="mb-6 mt-6 flex items-center p-6">
              <label htmlFor="uploadQ" className="mr-10 text-lg font-semibold">
                Upload the Questions Here:
              </label>
              <TextField
                id="uploadQ"
                name="question-upload"
                variant="outlined"
                placeholder="Write Your Question Here"
                InputLabelProps={{ shrink: false }}
                style={{ width: "50vw" }}
              />
            </div>
            <Divider flexItem={true} />
            <div className="mb-6 mt-6 flex items-center p-10 flex-col">
              <div className="mb-10 flex items-center">
                <label
                  className="mr-10 text-lg font-semibold"
                  htmlFor="option1"
                >
                  Option 1
                </label>
                <TextField
                  id="option1"
                  name="option1"
                  variant="outlined"
                  placeholder="Option 1"
                  InputLabelProps={{ shrink: false }}
                  style={{ width: "15vw" }}
                />
                <label
                  className="mr-10 ml-20 text-lg font-semibold"
                  htmlFor="option2"
                >
                  Option 2
                </label>
                <TextField
                  id="option2"
                  name="option2"
                  variant="outlined"
                  placeholder="Option 2"
                  InputLabelProps={{ shrink: false }}
                  style={{ width: "15vw" }}
                />
              </div>
              <div className="flex items-center">
                <label
                  className="mr-10 text-lg font-semibold"
                  htmlFor="option3"
                >
                  Option 3
                </label>
                <TextField
                  id="option3"
                  name="option3"
                  variant="outlined"
                  placeholder="Option 3"
                  InputLabelProps={{ shrink: false }}
                  style={{ width: "15vw" }}
                />
                <label
                  className="mr-10 ml-20 text-lg font-semibold"
                  htmlFor="option4"
                >
                  Option 4
                </label>
                <TextField
                  id="option4"
                  name="option4"
                  variant="outlined"
                  placeholder="Option 4"
                  InputLabelProps={{ shrink: false }}
                  style={{ width: "15vw" }}
                />
              </div>
            </div>
            <Divider flexItem={true} />
            <div className="mb-6 mt-6 flex items-center">
              <h2 className="text-lg font-semibold mr-10">
                Select the Correct Answer:-{" "}
              </h2>
              <div>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="correctAns">Option</InputLabel>
                    <Select
                      labelId="correctAns"
                      id="correctAns"
                      name="correctOption"
                      value={option}
                      label="Option"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>Option 1</MenuItem>
                      <MenuItem value={2}>Option 2</MenuItem>
                      <MenuItem value={3}>Option 3</MenuItem>
                      <MenuItem value={4}>Option 4</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
            <Divider flexItem={true} />
            <h2 className="mr-10 font-semibold text-lg mb-6 mt-6">
              Want to Upload Multiple Questions:-{" "}
            </h2>
            <Button
              variant="contained"
              component="label"
              style={{
                backgroundColor: "indigo",
                marginBottom: "2em",
                width: "15em",
                height: "3em",
              }}
            >
              Select Question File
              <input type="file" name="multipleQues" id="multipleQues" hidden />
            </Button>
            <Divider flexItem={true} />
            <Button
              variant="contained"
              style={{
                backgroundColor: "indigo",
                marginTop: "2.5em",
                marginBottom: "2em",
                width: "9.8em",
                height: "3em",
              }}
              type="submit"
            >
              Upload
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
