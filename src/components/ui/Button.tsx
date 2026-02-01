import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
    size?: 'md' | 'sm';
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    size = 'md',
    ...props
}) => {
    const baseStyles = "font-body-1 font-body transition-colors cursor-pointer inline-block border-t-[0.5px] border-l-[0.5px] border-b-[3px] border-r-[3px] text-center rounded-lg";

    const variants = {
        primary: "bg-[#FEC447] text-dark border-dark hover:bg-[#e5b02a]",
        outline: "bg-[#FBE9CA] text-dark border-dark hover:bg-[#f0debf]"
    };

    const sizes = {
        md: 'h-16 px-9',
        sm: 'h-11 px-4.5'
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
