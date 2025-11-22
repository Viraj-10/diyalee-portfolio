import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <Section className="py-24" id="contact">
            <div className="flex flex-col lg:flex-row gap-16">
                {/* Left: Text & Socials */}
                <div className="flex-1 space-y-8">
                    <h2 className="text-4xl font-bold">
                        Tell me about your <br /> project
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                        Let's help you define the vision and mission of your project, and I'll help you bring it to life with a design that connects with your audience.
                    </p>

                    <div className="pt-8">
                        <h4 className="font-bold mb-4">Follow Me</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            {/* Add more social icons if needed */}
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="flex-1 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-bold text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow focus:ring-2 focus:ring-yellow/20 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-bold text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow focus:ring-2 focus:ring-yellow/20 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-gray-700">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow focus:ring-2 focus:ring-yellow/20 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow focus:ring-2 focus:ring-yellow/20 outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="projectType" className="text-sm font-bold text-gray-700">Project Type</label>
                            <select
                                id="projectType"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow focus:ring-2 focus:ring-yellow/20 outline-none transition-all bg-white"
                            >
                                <option value="">Select a project type</option>
                                <option value="web">Web Design</option>
                                <option value="app">Mobile App</option>
                                <option value="branding">Branding</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-gray-700">Your Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow focus:ring-2 focus:ring-yellow/20 outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        <Button variant="primary" className="w-full md:w-auto">
                            Get in Touch
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};
