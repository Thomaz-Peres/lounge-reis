import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <html lang="en">
      <body className="w-full">
        <div className="m-1 p-1 max-w-4xl">
          <App />
        </div>
      </body>

    </html>
  </React.StrictMode>,
);
