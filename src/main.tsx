import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <html lang="en">
      <body className="bg-zinc-900">
        <div className="py-5 px-3 max-w h-full">
          <Home />
        </div>
      </body>

    </html>
  </React.StrictMode>,
);
