import React from 'react';
import { Button } from '../ui/Button';
import headerIcon from '../../assets/header-icon.png';

export const Header: React.FC = () => {

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
                <Button variant="outline" size='sm' className="text-base">
                    Connect Now
                </Button>
            </nav>
        </header>
    );
};
