import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 flex flex-1 ${className}`}>
            {children}
        </section>
    );
};
