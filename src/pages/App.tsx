import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { Card } from "../components/card";

function App() {
  return (
    <div>
      <Card clientName="teste" descrition="abc" value={30} item="Menta com melancia"/>
      <Card clientName="teste2" descrition="abc" value={20} item="Menta"/>
      <Card clientName="teste2" descrition="abc" value={25} item="Love 66"/>
    </div>
  );
}

export default App;
