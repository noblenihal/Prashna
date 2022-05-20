import React, { useState } from "react";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer(props) {
  const pdf = "./Upload";
  const [numPages, setNumPages] = useState(0);

  const [pageNumber, setPagenumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPagenumber(1);
  }

  const saveFile = () => {
    saveAs(pdf, "example.pdf");
  };

  return (
    <div className="bg-slate-300 flex justify-center items-center min-h-screen">
      <div
        style={{
          position: "fixed",
          top: "880px",
          right: "620px",
          "z-index": "1",
        }}
      >
        <a href={pdf} onClick={saveFile} download>
          <DownloadForOfflineIcon
            style={{ fontSize: "3.5rem" }}
            color="action"
          />
        </a>
      </div>
      <div className="bg-white w-[40vw] mt-4 mb-4 mr-10 shadow-md overflow-auto p-10 pt-8 flex justify-center">
        <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  );
}
