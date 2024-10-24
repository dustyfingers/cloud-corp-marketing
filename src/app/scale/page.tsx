import Hero from "@/components/Hero";

import scaleImage from "public/scale.jpg";

export default function Scale() {
  return (
    <div>
      <Hero
        imgData={scaleImage}
        imgAlt="Metalworking Factory"
        title="Scale Page"
      />
    </div>
  );
}
