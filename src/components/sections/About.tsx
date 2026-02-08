import React from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import AboutMe from "#src/assets/aboutme.svg";
import { EXPERIENCES } from "#src/consts";
import Sparkles from "#src/assets/experince.svg";
import { ExperienceContainer } from "#src/components/ui/Experince";

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="flex flex-col lg:flex-row gap-16 bg-primary-100 pl-15 pr-12 rounded-3xl max-h-[600px]">
        {/* Left: About Me */}
        <div className="flex-1 grow-25 relative h-fit mt-16">
          <div className="flex mb-8 gap-3 items-baseline">
            <h2 className="text-5xl font-bold">About Me</h2>
            <img src={AboutMe} className="h-20 w-auto" />
          </div>
          <div className="space-y-4.5 text-gray-600 text-lg leading-relaxed">
            <p>
              I am a Product Designer with a background in architecture and 4
              years of experience shaping user-centric digital products. At
              Cyraacs, I design across multiple platforms while also leading the
              UX and UI for new products from the ground up.
            </p>
            <p>
              My work spans workflow architecture, module design, and design
              systems, supported by strong collaboration with PMs, engineering,
              and stakeholders.
            </p>
          </div>
          <div className="mt-8">
            <Button
              variant="primary"
              className="font-semibold font-body-1 text-lg"
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* Right: Experience Card */}
        <div className="flex-1 grow-41 mt-12">
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
