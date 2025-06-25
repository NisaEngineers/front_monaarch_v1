// components/ui/DraggableWrapper.tsx
"use client";

import React, { useState } from "react";

interface DraggableWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function DraggableWrapper({
  children,
  className = "",
}: DraggableWrapperProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent text selection
    setDragging(true);
    setOffset({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setPosition({
      x: event.clientX - offset.x,
      y: event.clientY - offset.y,
    });
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: "move",
        display: "inline-block",
        position: "absolute", // ensures it can be moved freely on-screen
        zIndex: 1000,        // high z-index so it stays on top
      }}
      className={className}
    >
      {children}
    </div>
  );
}
