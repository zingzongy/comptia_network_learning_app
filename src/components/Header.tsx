// src/components/Header.tsx
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-end items-center p-4 border-b border-gray-300 dark:border-gray-700">
      <ThemeToggle />
    </header>
  );
};

export default Header;