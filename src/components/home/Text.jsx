import { useState, useEffect } from "react";
import Animation from "../../helpers/Animation";

const roles = [
  "Full Stack Developer",
  "Building with React & Next.js",
  "Crafting APIs with Python & FastAPI",
  "Open Source Contributor"
];

const Text = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="text-center max-w-2xl">
      <Animation>
        <p className="text-[var(--text-muted)] text-sm md:text-base tracking-widest uppercase mb-4">
          Hello, I'm
        </p>
      </Animation>

      <Animation className="delay-100">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Yubraj{" "}
          <span className="text-[var(--accent)]">Adhikari</span>
        </h1>
      </Animation>

      <Animation className="delay-200">
        <div className="h-8 md:h-10 flex items-center justify-center">
          <span className="text-lg md:text-xl text-[var(--text-secondary)] font-light">
            {displayText}
            <span className="ml-[1px] inline-block w-[2px] h-5 bg-[var(--accent)] animate-pulse" />
          </span>
        </div>
      </Animation>

      <Animation className="delay-300">
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-2.5 border border-[var(--border-subtle)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium rounded-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>
      </Animation>
    </div>
  );
};

export default Text;
