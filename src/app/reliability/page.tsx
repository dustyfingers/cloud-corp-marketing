import Hero from "@/components/Hero";

import reliabilityImage from "public/reliability.jpg";

export default function Reliability() {
  return (
    <div>
      <Hero
        imgData={reliabilityImage}
        imgAlt="Welder Working"
        title="Reliability Page"
      />
    </div>
  );
}
