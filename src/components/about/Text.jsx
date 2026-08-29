import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";
import Animation from "../../helpers/Animation";

const skills = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express", color: "#ffffff" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
];

export default function Text() {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-16">
      {/* Left — text */}
      <div className="md:w-3/5 space-y-5">
        <Animation>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            I love building things for the web. My field of interest lies in creating modern{" "}
            <span className="text-[var(--text-primary)] font-medium">web applications</span> and
            exploring <span className="text-[var(--text-primary)] font-medium">web scraping</span> techniques.
          </p>
        </Animation>

        <Animation>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            I work with modern JavaScript frameworks like{" "}
            <span className="text-[var(--accent)]">React.js</span> and{" "}
            <span className="text-[var(--accent)]">Next.js</span> to build
            performant, user-friendly experiences.
          </p>
        </Animation>

        <Animation>
          <a
            href="/assets/pdf/yubraj_adhikari.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 border border-[var(--border-subtle)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--accent)] text-sm font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <FiDownload className="w-4 h-4 group-hover:animate-bounce" />
            Download CV
          </a>
        </Animation>
      </div>

      {/* Right — skills */}
      <div className="md:w-2/5">
        <Animation>
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
            Technologies
          </p>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </Animation>
      </div>
    </div>
  );
}

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass flex items-center gap-3 px-4 py-3 rounded-lg hover:border-[var(--border-hover)] transition-all duration-300 cursor-default"
    >
      <skill.icon
        className="w-4 h-4 transition-colors duration-300"
        style={{ color: hovered ? skill.color : "var(--text-muted)" }}
      />
      <span
        className="text-sm transition-colors duration-300"
        style={{ color: hovered ? "var(--text-primary)" : "var(--text-secondary)" }}
      >
        {skill.name}
      </span>
    </div>
  );
}
