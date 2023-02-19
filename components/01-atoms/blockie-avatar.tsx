import * as blockies from "blockies-ts";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";

interface Props {
  name: string;
}

export const BlockieAvatar = ({ name = "" }: Props) => {
  const [src, setSrc] = useState<any>(null);
  useEffect(() => setSrc(blockies.create({ seed: name }).toDataURL()), [name]);
  return src && <Image src={src} layout="fill" alt={name} unoptimized />;
};
