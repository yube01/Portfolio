import Animation from "../helpers/Animation";

export default function Title({ title }) {
  return (
    <Animation>
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="mt-3 h-[2px] w-12 bg-[var(--accent)] rounded-full" />
      </div>
    </Animation>
  );
}
