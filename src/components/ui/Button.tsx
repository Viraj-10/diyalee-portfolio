import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    const baseStyles = "h-12 px-6 rounded-2xl font-body font-bold transition-colors cursor-pointer inline-block border-t-[0.5px] border-l-[0.5px] border-b-[3px] border-r-[3px] text-center";

    const variants = {
        primary: "bg-[#FEC447] text-dark border-dark hover:bg-[#e5b02a]",
        outline: "bg-[#FBE9CA] text-dark border-dark hover:bg-[#f0debf]"
    };

    return (
        <button
            className={` ${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
