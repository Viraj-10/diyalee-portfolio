import React, { useState } from 'react';
import { Button } from '../ui/Button';
import headerIcon from '../../assets/header-icon.png';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <header
            className="w-full max-h-[70px] px-24 py-3 flex items-center justify-between relative z-50 bg-header-bg border-b border-header-border rounded-b-3xl"
        >
            {/* Logo Icon */}
            <div className="max-h-[52px] h-[52px]">
                <img src={headerIcon} alt="Diyalee Logo" className="h-full w-auto" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="font-display font-normal text-[16px] text-dark hover:text-gray-800 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
                <Button variant="outline" className="w-full text-[16px] font-semibold">
                    Connect Now
                </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-2xl text-dark"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-header-bg shadow-lg p-6 flex flex-col gap-4 md:hidden rounded-b-3xl border-t border-header-border">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-display font-normal text-[16px] text-dark"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="outline" className="w-full text-[20px] font-semibold">
                        Connect Now
                    </Button>
                </div>
            )}
        </header>
    );
};
