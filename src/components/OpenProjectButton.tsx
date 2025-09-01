"use client";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export default function OpenProjectButton({
  label = "Empezar proyecto",
  ...props
}: Props) {
  return (
    <button
      {...props}
      onClick={() => {
        // no dependas de props.onClick para no pasar handlers desde Server
        window.dispatchEvent(new Event("open-project-modal"));
      }}
    >
      {label}
    </button>
  );
}
