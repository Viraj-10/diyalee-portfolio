import React from 'react';
import { Section } from '../ui/Section';
import { PenTool, Layout, Palette } from 'lucide-react';
import Idea from "#src/assets/idea.svg"

const ServiceCard: React.FC<{
    title: string;
    description: string;
    icon: React.ReactNode;
    iconBg: string;
}> = ({ title, description, icon, iconBg }) => (
    <div className="bg-service-card/50 border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow flex flex-col gap-6">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${iconBg}`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
            {description}
        </p>
    </div>
);

export const Services: React.FC = () => {
    return (
        <Section className="py-32 flex flex-col gap-16" id="services">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-2">
                    What I can do for you
                    <img src={Idea} className='h-16' />
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-xl">
                    From impactful UI/UX design to cohesive branding and effective project management, I provide solutions that drive success.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <ServiceCard
                    title="Product Design & System Thinking"
                    description="I create intuitive designs focused on user needs, build design systems, and ensure seamless experiences across web and mobile platforms."
                    icon={<PenTool size={32} className="text-blue-600" />}
                    iconBg="bg-blue-100"
                />
                <ServiceCard
                    title="UI/UX Design & Web Development"
                    description="I design beautiful user interfaces and build responsive websites using modern frameworks like React and Tailwind CSS."
                    icon={<Layout size={32} className="text-teal-600" />}
                    iconBg="bg-teal-100"
                />
                <ServiceCard
                    title="Branding & Identity Development"
                    description="I develop unique visual identities, logo designs, and brand guidelines to help businesses stand out and connect with their audience."
                    icon={<Palette size={32} className="text-pink-600" />}
                    iconBg="bg-pink-100"
                />
            </div>
        </Section>
    );
};
