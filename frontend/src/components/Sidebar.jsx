import React, { useState } from "react";
import stackleLogo from "../assets/stackle.png";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = (path) => {
        window.location.href = path;
    };

    return (
        <div className="relative">
            {/* Mobile Toggle Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded shadow hover:bg-gray-800"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle sidebar"
            >
                {isOpen ? "✖️ Close" : "📂 Menu"}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white shadow-lg transition-transform duration-300 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 lg:relative z-40`}
            >
                <div className="flex flex-col justify-between h-full ">
                    {/* Top section */}
                    <div>
                        {/* Logo */}
                        <div className="p-4 text-center " >
                            <img
                                src={stackleLogo}
                                alt="Logo"
                                className="w-16 h-16 mx-auto mb-2 border rounded shadow-lg "
                            />
                            <h1 className="text-xl font-bold">Stackle</h1>
                        </div>
                        <div className="p-4 text-center text font-bold text-green-300 ">
                            👨‍💻 <strong>AI Coding</strong> Instructor
                        </div>

                        <nav className="px-4 flex flex-col gap-2 mt-4">
                            {/* Dashboard */}
                            <button
                                className="flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-blue-300 bg-green-300/80"
                                onClick={() => handleNavigation("/dashboard")}
                            >
                                📊 Dashboard
                            </button>

                            {/* History */}
                            <button
                                className="flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-blue-300 bg-green-300/80"
                                onClick={() => handleNavigation("/history")}
                            >
                                📜 History
                            </button>

                            {/* Tutorial */}
                            <button
                                className="flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-blue-300 bg-green-300/80"
                                onClick={() => handleNavigation("/tutorial")}
                            >
                                🎓 Tutorial
                            </button>

                            {/* Settings */}
                            <button
                                className="flex items-center gap-3 p-3 rounded cursor-pointer hover:bg-blue-300 bg-green-300/80"
                                onClick={() => handleNavigation("/settings")}
                            >
                                ⚙️ Settings
                            </button>
                        </nav>
                    </div>

                    {/* Footer */}
                    <div className="p-4 text-center text-sm text-gray-400">
                        © {new Date().getFullYear()} Coding AI
                    </div>
                </div>
            </aside>
        </div>
    );
}
