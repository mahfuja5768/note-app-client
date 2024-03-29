import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from './routes/router';
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <ToastContainer />
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
