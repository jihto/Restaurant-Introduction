import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button
            className={`bg-[#c49a6c] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#e9cfa8] transition flex items-center justify-center gap-2 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
