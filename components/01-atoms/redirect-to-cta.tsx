import {
  CircleStackIcon,
  CubeTransparentIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { RedirectionCTAType } from "../../pages";

interface RedirectProps {
  destiny: string;
  label: string;
  type: RedirectionCTAType;
}

export const RedirectToCta = ({ destiny, label, type }: RedirectProps) => {
  return (
    <Link
      href={destiny}
      className="w-full flex-col mx-auto my-0 flex bg-cream border-[1px] rounded-2xl p-4 justify-center items-center text-base hover:bg-gray-1 transition"
    >
      <div className="w-16 mb-4">
        {type === RedirectionCTAType.ONRAMP ? (
          <CircleStackIcon />
        ) : type === RedirectionCTAType.VAULT ? (
          <ShieldCheckIcon />
        ) : type === RedirectionCTAType.TRANSPARENCY ? (
          <CubeTransparentIcon />
        ) : null}
      </div>
      {label}
    </Link>
  );
};

export default RedirectToCta;
