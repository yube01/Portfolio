import React from "react";
import Text from "./Text";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10">
        <Text />
      </div>
    </section>
  );
};

export default Home;
