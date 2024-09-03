import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return ( 
        <div className="w-64 h-screen bg-gray-800 text-white">
            <div className="p-4">
                <h2 className="text-xl font-bold"> Admin Dashboard</h2>
            </div>
            <nav className="mp-10">
                <Link to="/" className="block p-3 px-4 hover:bg-gray-700">
                    Dashboard
                </Link>
                <Link to="/users" className="block p-3 px-4 hover:bg-gray-700">
                    Users
                </Link>
                <Link to="/about" className="block p-3 px-4 hover:bg-gray-700">
                    About
                </Link>
                <Link to="/contact" className="block p-3 px-4 hover:bg-gray-700">
                    Contact
                </Link>
            </nav>
        </div>
    );
}