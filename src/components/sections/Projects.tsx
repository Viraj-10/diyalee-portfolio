import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

const ProjectCard: React.FC<{
    title: string;
    description: string;
    tags: string[];
    image: string;
    index: number;
}> = ({ title, description, tags, image, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-24 last:mb-0`}>
            {/* Text Content */}
            <div className="flex-1 space-y-6">
                <div className="flex gap-3 flex-wrap">
                    {tags.map((tag) => (
                        <span key={tag} className={`px-4 py-1 rounded-full text-sm font-medium border border-dark ${tag.includes('UX') ? 'bg-orange-100' :
                                tag.includes('Web') ? 'bg-teal-100' : 'bg-purple-100'
                            }`}>
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-4xl font-bold">{title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                    {description}
                </p>
                <Button variant="outline" className="!px-8">
                    See Website
                </Button>
            </div>

            {/* Image */}
            <div className="flex-1 w-full">
                <div className="bg-cream rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </div>
    );
};

export const Projects: React.FC = () => {
    const projects = [
        {
            title: 'The Nudge',
            description: 'The Nudge is a habit-building app that helps users stay consistent with their goals through gentle reminders and progress tracking. I designed the mobile app interface focusing on simplicity and motivation.',
            tags: ['UX Design', 'App'],
            image: 'https://placehold.co/600x400/png?text=The+Nudge+App', // Placeholder
        },
        {
            title: 'Pick Retreat',
            description: 'Pick Retreat is a platform for booking yoga and wellness retreats. I led the web design and development, creating a serene and trustworthy booking experience for users worldwide.',
            tags: ['Web Design', 'Yoga Retreat'],
            image: 'https://placehold.co/600x400/png?text=Pick+Retreat', // Placeholder
        },
        {
            title: 'Sunbreeze',
            description: 'Sunbreeze is a real estate agency focused on sustainable homes. I developed their brand identity and website to reflect their commitment to eco-friendly living and modern architecture.',
            tags: ['Web Design', 'Real Estate'],
            image: 'https://placehold.co/600x400/png?text=Sunbreeze', // Placeholder
        },
    ];

    return (
        <Section className="py-24" id="projects">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-gray-600">
                    Explore a selection of projects that highlight my passion for design and development.
                </p>
            </div>

            <div>
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} index={index} />
                ))}
            </div>
        </Section>
    );
};
