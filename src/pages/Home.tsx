import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { Card } from "../components/card";
import App from "./App";

function Home() {
    return (
        <div>

            <div className="flex justify-center mb-3" role="group">
            <div className="mr-2">
                <button type="button"
                        className="px-4 py-2 text-sm font-medium text-white-900 rounded-xl bg-sky-600 border border-white-900 hover:bg-sky-700">Criar pedido</button>
                </div>
            <div className="" >
                <button type="button"
                        className="px-4 py-2 text-sm font-medium text-white-900 rounded-xl bg-sky-600 border border-white-900 hover:bg-sky-700">Adicionar produto</button>
                </div>
            </div>

            <App />
        </div>
    );
}

export default Home;
