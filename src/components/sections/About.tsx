import React from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Pencil } from "lucide-react";
import { EXPERIENCES } from "#src/consts";
import Sparkles from "#src/assets/experince.svg";
import { ExperienceContainer } from "#src/components/ui/Experince";

export const About: React.FC = () => {
  return (
    <Section className="py-24" id="about">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left: About Me */}
        <div className="flex-1 grow-25">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            About Me
            <Pencil className="text-yellow-400 rotate-45" size={32} />
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              A creative professional who has turned their passion for design
              into a career. I specialize in creating user-centric designs that
              solve real problems.
            </p>
            <p>
              With over 7 years of experience, I have worked with various
              clients to build digital products that are both functional and
              aesthetically pleasing.
            </p>
            <p>
              My approach involves deep user research, iterative prototyping,
              and close collaboration with developers to ensure the final
              product matches the vision.
            </p>
          </div>
          <div className="mt-8">
            <Button variant="primary">Download CV</Button>
          </div>
        </div>

        {/* Right: Experience Card */}
        <div className="flex-1 grow-41">
          <div className="bg-primary-300 rounded-3xl p-12 border-dark border-t-[0.5px] border-l-[0.5px] border-b-[4.5px] border-r-[4.5px]  relative">
            <h3 className="text-4xl font-semibold mb-6 flex items-center">
              Experience
              <img src={Sparkles} alt="Sparkles" className="ml-3 w-11 h-11" />
            </h3>

            <ExperienceContainer experiences={EXPERIENCES} />
          </div>
        </div>
      </div>
    </Section>
  );
};
