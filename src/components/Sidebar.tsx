import React, { useState, useRef, useEffect, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

const Sidebar: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(268); // default width

  const minWidth = 150;
  const maxWidth = 600;

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      if (!isResizing || !sidebarRef.current) return;

      const newWidth = e.clientX - sidebarRef.current.getBoundingClientRect().left;
      setWidth(Math.min(maxWidth, Math.max(minWidth, newWidth)));
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <aside
      ref={sidebarRef}
      style={{ width }}
      className="relative flex flex-col p-4 gap-4 bg-white dark:bg-gray-800 shadow-md h-full"
    >
      {/* Resizer handle */}
      <div
        onMouseDown={startResizing}
        className="absolute top-0 right-0 h-full w-1 cursor-col-resize bg-gray-300 dark:bg-gray-600"
      />

      <h2 className="text-xl font-semibold">Network+ Course</h2>
      <nav>
        <ul className="space-y-2">
          <li>Chapter 1 (placeholder)</li>
          <li>Chapter 2 (placeholder)</li>
          <li>Chapter 3 (placeholder)</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
