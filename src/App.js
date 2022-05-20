import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Account from "./components/Account";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import UploadQ from "./components/UploadQ";
import PdfViewer from "./components/PdfViewer";
import FinalPdf from "./components/FinalPdf";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/generate" element={<PdfViewer />} />
        <Route path="/pdf" element={<FinalPdf />} />
        <Route path="/upload" element={<UploadQ />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
