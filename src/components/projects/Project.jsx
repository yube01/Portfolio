import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Animation from "../../helpers/Animation";

export default function Project({ data, index }) {
  return (
    <Animation className={`delay-${index * 100} h-full`}>
      <div className="glass rounded-xl overflow-hidden group hover:border-[var(--border-hover)] transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
        {/* Image */}
        <div className="overflow-hidden aspect-video">
          <img
            src={`/assets/img/cover/${data.cover}`}
            alt={data.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-semibold mb-1 group-hover:text-[var(--accent)] transition-colors duration-300">
            {data.title}
          </h3>
          <p className="text-sm text-[var(--text-muted)] mb-3">
            {data.desc}
          </p>

          {data.learned && (
            <div className="mb-4 pt-3 border-t border-[var(--border-subtle)]">

              <ul className="space-y-1.5">
                {(Array.isArray(data.learned) ? data.learned : [data.learned]).map((point, i) => (
                  <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 mt-auto pt-2">
            <a
              href={data.hostURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors duration-300"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
            <a
              href={data.gitURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
            >
              <FiGithub className="w-3.5 h-3.5" />
              Code
            </a>
          </div>
        </div>
      </div>
    </Animation>
  );
}
