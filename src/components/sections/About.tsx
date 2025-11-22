import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Pencil, Sparkles } from 'lucide-react';

const ExperienceItem: React.FC<{
    role: string;
    company: string;
    period: string;
}> = ({ role, company, period }) => (
    <div className="mb-6 last:mb-0">
        <h4 className="font-bold text-lg">{role}</h4>
        <p className="text-sm font-semibold mb-1">{company}</p>
        <p className="text-xs text-gray-700">{period}</p>
    </div>
);

export const About: React.FC = () => {
    const experiences = [
        { role: 'Product Designer', company: 'Company Name', period: 'Jan 2023 - Present' },
        { role: 'General UI Designer', company: 'Previous Corp', period: 'Jun 2021 - Dec 2022' },
        { role: 'UI/UX Designer', company: 'Tech Studio', period: 'Jan 2020 - May 2021' },
        { role: 'UI/UX Designer', company: 'Freelance', period: 'Jun 2018 - Dec 2019' },
        { role: 'Art Intern', company: 'Design Agency', period: 'Jan 2018 - May 2018' },
    ];

    return (
        <Section className="py-24" id="about">
            <div className="flex flex-col lg:flex-row gap-16">
                {/* Left: About Me */}
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                        About Me
                        <Pencil className="text-yellow-400 rotate-45" size={32} />
                    </h2>
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        <p>
                            A creative professional who has turned their passion for design into a career.
                            I specialize in creating user-centric designs that solve real problems.
                        </p>
                        <p>
                            With over 7 years of experience, I have worked with various clients to build
                            digital products that are both functional and aesthetically pleasing.
                        </p>
                        <p>
                            My approach involves deep user research, iterative prototyping, and close
                            collaboration with developers to ensure the final product matches the vision.
                        </p>
                    </div>
                    <div className="mt-8">
                        <Button variant="primary">Download CV</Button>
                    </div>
                </div>

                {/* Right: Experience Card */}
                <div className="flex-1">
                    <div className="bg-yellow rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(37,40,43,1)] border-2 border-dark relative">
                        <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            Experience
                            <Sparkles className="text-white" size={28} />
                        </h3>

                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                            {experiences.map((exp, index) => (
                                <ExperienceItem key={index} {...exp} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
