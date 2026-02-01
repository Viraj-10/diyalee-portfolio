import React from "react";
import { Section } from "../ui/Section";
import Idea from "#src/assets/idea.svg";
import { SERVICES } from "#src/consts";
import { Glow } from "../ui/Glow";

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => (
  <div className="z-10 relative p-8 rounded-4xl pb-18 bg-primary-100 border-t-[0.5px] border-l-[0.5px] border-b-4 border-r-4 overflow-hidden">
    <div className={`w-16 h-16 rounded-full flex items-center justify-center`}>
      {icon}
    </div>
    <div className="mt-6">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg mt-3">{description}</p>
    </div>
    <div className="absolute top-1.5 right-3.5">
      <Glow
        variant="31"
        width="202px"
        height="209px"
        blur="200px"
        color="rgba(249, 179, 92, 0.8)"
      />
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <Section className="relative flex flex-col gap-16" id="services">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold mb-4 flex items-center justify-center">
          What I can do for you
          <img src={Idea} className="h-16" />
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-xl">
          From impactful UI/UX design to cohesive branding and effective project
          management, I provide solutions that drive success.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={<img src={service.icon} className="h-20 w-auto" />}
          />
        ))}
      </div>
      <div className="absolute top-[129px] -right-[102px]">
        <Glow
          variant="30"
          width="282px"
          height="260px"
          blur="375px"
          color="rgba(249, 179, 92, 0.5)"
        />
      </div>
    </Section>
  );
};
