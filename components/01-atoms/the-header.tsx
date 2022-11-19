import Link from "next/link";

export const TheHeader = () => {
  return (
    <header className="w-full inline-flex items-center justify-between py-6 px-10">
      <Link href="/" className="font-semibold text-xl">
        stable<span className="font-light">bridge</span>
      </Link>
      <h1 className="font-regular text-xs opacity-30">by Blockful</h1>
    </header>
  );
};

export default TheHeader;
