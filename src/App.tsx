import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex h-screen text-black dark:text-white bg-white dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 overflow-auto">
          {/* Your main content here */}
        </main>
      </div>
    </div>
  );
}


export default App;
