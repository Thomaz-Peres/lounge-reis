import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <html lang="en">
      <body className="bg-neutral-950 w-screen h-screen">
        <div className="py-5 px-3">
          <Home />
        </div>
      </body>

    </html>
  </React.StrictMode>,
);
