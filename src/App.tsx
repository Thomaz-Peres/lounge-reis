import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { Card } from "./components/card";

function App() {
  return (
    <div>
      <Card></Card>
    </div>
  );
}

export default App;
