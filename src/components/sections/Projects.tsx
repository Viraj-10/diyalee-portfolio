import React from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { PROJECTS, PROJECTS_DESCRIPTION, type Project } from "#src/consts";

const ProjectCard = ({
  title,
  description1,
  description2,
  tags,
  tagsColor,
  image,
  imageBackground,
  index,
  link,
}: Project & { index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-1 flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-11 items-center mb-24 last:mb-0`}
    >
      {/* Text Content */}
      <div className="flex-1">
        <div className="flex gap-3 mb-4.5">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className={`px-4 py-1 rounded-full text-sm font-medium border border-dark ${
                tagsColor[index]
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-4xl font-bold mb-4.5">{title}</h3>
        <p className="text-lg leading-relaxed mb-3">{description1}</p>
        <p className="text-lg leading-relaxed">{description2}</p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => {
            window.open(link);
          }}
        >
          See Website
        </Button>
      </div>

      {/* Image */}
      <div className="relative">
        <div
          className={`w-full h-full absolute top-4.5 left-4.5 rounded-3xl border-r-3 border-b-3 border-t-[0.3px] border-l-[0.3px] ${imageBackground}`}
        ></div>
        <img
          src={image}
          alt={title}
          className="relative z-10 max-w-full h-auto object-cover rounded-3xl overflow-hidden"
        />
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <Section className="py-24 mt-30 flex flex-col" id="projects">
      <div className="text-center mb-11">
        <h2 className="text-5xl font-bold mb-4.5">Featured Projects</h2>
        <p className="whitespace-break-spaces">{PROJECTS_DESCRIPTION}</p>
      </div>
      <div>
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </Section>
  );
};
