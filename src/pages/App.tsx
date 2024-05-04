import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { Card } from "../components/card";

function App() {
  return (
    <div>
      <Card clientName="teste" descrition="abc" value={100} item="Rosh menta"></Card>
      <Card clientName="teste" descrition="abc" value={100} item="Rosh menta"></Card>
    </div>
  );
}

export default App;
