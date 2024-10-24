import Hero from "@/components/Hero";
import homeImage from "public/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero imgData={homeImage} imgAlt="Car Factory" title="Home Page" />
    </div>
  );
}
