// src/app/components/Navbar.js
"use client";
import { useState } from "react";
import {
  FaBars,
  FaCar,
  FaMapMarkedAlt,
  FaNewspaper,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Beranda", href: "/", icon: null },
    { name: "Tentang Kami", href: "/about", icon: null },
    { name: "Mobil", href: "/car", icon: <FaCar className="inline mr-1" /> },
    {
      name: "Paket Tour",
      href: "/tourpacket",
      icon: <FaMapMarkedAlt className="inline mr-1" />,
    },
    {
      name: "Artikel",
      href: "/article",
      icon: <FaNewspaper className="inline mr-1" />,
    },
    {
      name: "Kontak",
      href: "/contact",
      icon: <FaPhoneAlt className="inline mr-1" />,
    },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              SultengTravel
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  {item.icon} {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon} {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
