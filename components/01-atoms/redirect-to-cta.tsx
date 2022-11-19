import Link from "next/link";

interface RedirectProps {
  destiny: string;
  label: string;
}

export const RedirectToCta = ({ destiny, label }: RedirectProps) => {
  return (
    <Link
      href={destiny}
      className="flex bg-cream border-[1px] rounded-2xl p-4 justify-center items-center h-40 w-80 text-xl hover:bg-gray-1 transition"
    >
      {label}
    </Link>
  );
};

export default RedirectToCta;
