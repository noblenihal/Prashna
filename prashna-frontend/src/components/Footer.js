import { data } from "autoprefixer";
import React, { Component } from "react";

export default function Footer(props) {
  const date = new Date();

  return (
    <div
      className={
        props.style ||
        "bg-[#171717] text-lg text-white text-center inset-x-0 bottom-0 p-4"
      }
    >
      Copyright &copy; {date.getFullYear()} Prashna
    </div>
  );
}
