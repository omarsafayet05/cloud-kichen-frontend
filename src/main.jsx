import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./Components/Contexts/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="md:max-w-screen-xl max-w-screen-sm mx-auto ">
        <App />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
