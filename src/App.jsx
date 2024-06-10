"use client";

import { RouterProvider } from "react-router-dom";

import router from "./Components/Router/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
