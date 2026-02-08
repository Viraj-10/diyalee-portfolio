import betterhood from "#src/assets/project-1.png";
export const SERVICES = [
  {
    title: "Product Design & System Thinking",
    description:
      "I create scalable designs, refine workflows, build design systems, and work with PMs and engineers to improve usability and overall product experience.",
    icon: "src/assets/service-icon-1.svg",
  },
  {
    title: "UI/UX Design & Web Development",
    description:
      "I design intuitive user interfaces tailored to your needs, using research, wireframing, and usability testing to ensure a seamless user journey.",
    icon: "src/assets/service-icon-2.svg",
  },
  {
    title: "Branding & Identity Development",
    description:
      "I create cohesive brand identities through logo design, color palettes, typography, and brand guidelines for consistent branding across platforms.",
    icon: "src/assets/service-icon-3.svg",
  },
];

export const EXPERIENCES = [
  {
    designation: "Product Designer",
    company: "Cyraacs",
    period: "Feb 2025- Present",
    description:
      "Worked on designing end-to-end modules by shaping workflows, mapping persona needs, and converting complex requirements into usable interfaces.",
  },
  {
    designation: "Senior UI UX Designer",
    company: "Brandshark",
    period: "Nov 2023- Jan 2025",
    description:
      "Supervising full project lifecycle, from UI/UX design to development and site launch, ensuring project goals through effective client management.",
  },
  {
    designation: "UI/UX Designer",
    company: "Brandshark",
    period: "Feb 2023- Nov 2023",
    description:
      "Worked on a diverse range of projects, learning from collaborating with developers and clients to ensure that designs met project requirements.",
  },
  {
    designation: "UI/UX Designer",
    company: "Freelance",
    period: "Nov 2022- Feb 2023",
    description:
      "Worked with a diverse group of clients and have gained experience in collaborating with remote teams ",
  },
  {
    designation: "Architect",
    company: "Parekh Associates",
    period: "Oct 2021- Nov 2022",
    description:
      "End-to-end responsibility from conceptualisation and design to site execution across projects of varied scales.",
  },
];

export const PROJECTS_DESCRIPTION =
  "Explore my featured projects that highlight my blend of UI/UX design and project management, \n reflecting a commitment to user-centric solutions across diverse industries";
export const PROJECTS = [
  {
    tags: ["Web design", "Health Assessment Website"],
    tagsColor: ["bg-pink-50", "bg-blue-50"],
    title: "Betterhood",
    description1:
      "Betterhood is a diagnostic and recommendation platform focused on pain management for back, neck, shoulder, and knee conditions.",
    description2:
      "I designed and managed its user-centric website, integrating multi-level assessments that provide tailored product recommendations. The fresh, engaging design ensures an intuitive experience, encouraging user interaction and trust.",
    image: betterhood,
    link: "https://google.com",
    imageBackground: "bg-pink-50",
  },
];

export type Project = (typeof PROJECTS)[0];
