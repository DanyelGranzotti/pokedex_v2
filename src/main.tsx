import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes.tsx";
import { ToastContainer } from "react-toastify";
import { StyledToastContainer } from "./components/atoms/Toast.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
    <StyledToastContainer />
  </React.StrictMode>
);
