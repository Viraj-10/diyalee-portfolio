import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-2xl font-bold tracking-tighter">
                    <span className="text-accent-purple">●</span> Diyalee
                </div>
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Diyalee. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
