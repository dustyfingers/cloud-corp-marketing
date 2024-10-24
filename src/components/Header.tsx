import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/scale">Scale</Link>
      <Link href="/reliability">Reliability</Link>
    </div>
  );
};

export default Header;
