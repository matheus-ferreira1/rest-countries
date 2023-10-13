import * as React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export type Country = {
  name: string;
  flag: string;
  flagAlt: string;
  region?: string;
};

export function CountryCard({ name, flag, flagAlt, region }: Country) {
  return (
    <article className="p-4 min-w-full border rounded flex flex-col gap-4 transition-all hover:shadow-xl">
      <div className="relative w-full h-40 p-2 overflow-hidden rounded">
        <Image src={flag} fill alt={flagAlt} className="object-fill" />
      </div>
      <span className="flex gap-2">
        <h1 className="font-bold">{name}</h1>
        <h6 className="font-light">{region}</h6>
      </span>
      <Link href={`/country/${name}`}>
        <Button>More</Button>
      </Link>
    </article>
  );
}
