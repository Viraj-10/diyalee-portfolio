import React from 'react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import heroImage from '../../assets/hero-image.png'; // Placeholder, need to move asset

export const Hero: React.FC = () => {
    return (
        <Section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-12 pb-24">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
                <p className="text-blue-600 font-medium tracking-wide">
                    Welcome to Diyalee, here to simplify design
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                    DESIGNING FOR <br />
                    GROWTH.
                </h1>
                <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                    Currently serving as a Product Designer with 7 years of experience designing mobile and web UI, mobile apps, and website design systems to create intuitive, user-focused experiences.
                </p>
                <Button variant="primary">
                    Get in touch
                </Button>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative flex justify-center">
                {/* Background Shape (Pink Starburst) - CSS or SVG */}
                <div className="absolute inset-0 bg-accent-purple opacity-20 blur-3xl rounded-full transform scale-75 translate-x-4 translate-y-4 -z-10"></div>

                {/* Main Image */}
                <div className="relative z-10">
                    {/* We will use the actual image asset here */}
                    <img
                        src={heroImage}
                        alt="Diyalee - Product Designer"
                        className="max-w-full h-auto object-contain relative z-10"
                        style={{ maxHeight: '500px' }}
                    />
                </div>
            </div>
        </Section>
    );
};
