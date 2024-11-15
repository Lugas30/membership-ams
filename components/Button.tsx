import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
};

export default function Button({
  label,
  onClick,
  type,
  disabled,
  className,
  loading = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} bg-base-accent hover:bg-blue-950 py-2 px-4 w-full max-w-64 text-white text-sm uppercase tracking-wider rounded-full focus:outline-none focus:shadow-outline`}
    >
      {loading ? <span>Loading...</span> : label}
    </button>
  );
}
