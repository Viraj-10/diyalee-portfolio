import type { EXPERIENCES } from "#src/consts";

const ExperienceItem = ({
  designation,
  company,
  period,
  description,
  isLast = false,
}: (typeof EXPERIENCES)[0] & { isLast?: boolean }) => {
  return (
    <div className="relative flex gap-4">
      {/* Timeline Line and Dot */}
      <div className="relative flex flex-col items-center w-4 shrink-0">
        {/* Dot */}
        <div className="w-2.5 h-2.5 rounded-full bg-green-300 z-10 mt-2 border-[0.4px] border-dark"></div>
        {/* Dashed Line using SVG - extends from bottom of dot to next dot */}
        {!isLast && (
          <div className="absolute left-[calc(50%-1px)] flex items-center justify-center transform -translate-x-1/2 w-0 top-5 -bottom-2">
            <svg
              width="2"
              height="100%"
              className="absolute top-0 left-0"
              preserveAspectRatio="none"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                className="stroke-dotted-border"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="5 5"
              />
            </svg>
          </div>
        )}
      </div>
      {/* Content */}
      <div className={`flex-1 ${isLast ? "" : "pb-4"}`}>
        <div className="flex flex-row gap-4">
          {/* Left Column - Designation and Period */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">{designation}</h3>
            <p className="text-sm">{period}</p>
          </div>
          {/* Right Column - Company and Description */}
          <div className="flex-2">
            <h4 className="text-lg font-bold  mb-2">{company}</h4>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Experience Container Component
const ExperienceContainer = ({
  experiences,
}: {
  experiences: typeof EXPERIENCES;
}) => {
  return (
    <div className="w-full max-w-6xl">
      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={exp.designation}
            designation={exp.designation}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export { ExperienceContainer, ExperienceItem };
