import React from 'react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import heroImage from '../../assets/hero-image.png'; // Placeholder, need to move asset
import arrow from "../../assets/arrow.svg"
import welcometopimage from "../../assets/welcome-top-image.svg"

export const Hero: React.FC = () => {
    return (
        <Section className="flex h-[calc(100vh-70px)] flex-col-reverse md:flex-row items-center justify-between gap-12 pt-12 pb-24 bg-secondary overflow-hidden relative">
            {/* Background - Radial Gradient */}
            <div className="absolute top-0 left-0 right-0 flex justify-between">
                <div className="blurred-ellipse">
                </div>
                <div className="blurred-ellipse">
                </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center">
                <div className="blurred-ellipse">
                </div>
            </div>
            {/* Left Content */}
            <div className="flex-1 space-y-6">
                <div className='relative'>
                    <p className="text-blue-600 font-medium tracking-wide font-body-1">
                        Welcome! I'm Diyalee, here to simplify design
                    </p>
                    <img src={welcometopimage} className="absolute h-12 -top-[28px] -left-[35px]" alt="Welcome Top Image" />
                </div>
                <div className='relative'>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        DESIGNING FOR <br />
                        GROWTH.
                    </h1>
                    <img src={arrow} className="h-20 absolute -bottom-[21px] right-[25%]" alt="Arrow" />
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Currently working as a <span className="font-semibold text-dark">Product Designer</span> with <span className="font-semibold text-dark">4+ years</span> of experience designing end-to-end product modules, workflows, and scalable design systems to create intuitive, user-focused experiences.
                </p>
                <Button variant="primary" className='justify-center text-lg font-semibold'>
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
                        className="w-auto h-[560px] object-contain relative z-10"
                    />
                </div>
            </div>
        </Section>
    );
};
