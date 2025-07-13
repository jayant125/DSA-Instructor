import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import History from "./pages/History";
import Tutorial from "./pages/Tutorial";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-lime-300">
        {/* Sidebar stays left */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<div className="text-xl">📊 Dashboard<Home></Home></div>} />
            <Route path="/history" element={<div className="text-xl">📜 History</div>} />
            <Route path="/tutorial" element={<div className="text-xl">🎓 Tutorial</div>} />
            <Route path="/settings" element={<div className="text-xl">⚙️ Settings</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}









