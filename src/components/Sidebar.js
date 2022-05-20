import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

export default function Sidebar() {
  return (
    <div className="w-[20vw] min-h-full shadow-r-xl bg-white ease-in-out duration-300">
      <div className="ml-6">
        <ul className="mb-4 ml-1 mt-10">
          <li className="text-xl font-semibold text-slate-600 mb-2">
            Question Paper
          </li>
          <ul className="ml-4">
            <a href="/generate" className="hover:text-indigo-900">
              <li className="mb-2 text-base font-medium text-slate-900">
                Generate Paper
              </li>
            </a>
            <a href="#" className="hover:text-indigo-900">
              <li className="mb-2 text-base font-medium text-slate-900">
                Search Questions
              </li>
            </a>
            <a href="#" className="hover:text-indigo-900">
              <li className="mb-2 text-base font-medium text-slate-900">
                Question Bank
              </li>
            </a>
            <a href="#" className="hover:text-indigo-900">
              <li className="mb-2 text-base font-medium text-slate-900">
                Practice Papers
              </li>
            </a>
          </ul>
        </ul>
        <ul className="mb-4 ml-1 mt-10">
          <li className="text-xl font-semibold text-slate-600 mb-2">
            Contribute
          </li>
          <ul className="ml-4">
            <a href="/upload" className="hover:text-indigo-900">
              <li className="mb-2 text-base font-medium text-slate-900">
                Upload Paper
              </li>
            </a>
            <a href="#" className="hover:text-indigo-900">
              <li className="mb-2 text-base font-medium text-slate-900">
                View Papers
              </li>
            </a>
          </ul>
        </ul>
        <ul className="mb-4 ml-1 mt-10">
          <li className="text-xl font-semibold text-slate-600 mb-2">Account</li>
          <ul className="ml-4">
            <a href="/account" className="hover:text-indigo-900">
              <li className="mb-2 text-base font-medium text-slate-900">
                Your Profile
              </li>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-900"
            >
              <li className="mb-2 text-base font-medium text-slate-900">
                Change Password
              </li>
            </a>
            <a href="#" className="hover:text-indigo-900">
              <li className="mb-2 text-base font-medium text-slate-900">
                Redeeem
              </li>
            </a>
            <a href="#" className="hover:text-indigo-900">
              <li className="mb-2 text-base font-medium text-slate-900">
                Status
              </li>
            </a>
          </ul>
        </ul>
      </div>
    </div>
  );
}
