import Hero from "@/components/Hero";

import performanceImage from "public/performance.jpg";

export default function Performance() {
  return (
    <div>
      <Hero
        imgData={performanceImage}
        imgAlt="Welding"
        title="Performance Page"
      />
    </div>
  );
}
