import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { Card } from "../components/card";
import App from "./App";

function Home() {
    return (
        <div>

            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" className="px-4 py-2 text-sm font-medium text-white-900 rounded-s-lg bg-transparent border border-white-900 ">Profile</button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-white-900 bg-transparent border border-b border-white-900">Settings </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-white-900 rounded-e-lg bg-transparent border border-white-900">Downloads</button>
            </div>

            <App />
        </div>
    );
}

export default Home;
