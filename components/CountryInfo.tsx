"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

type Country = {
  country: {
    name: {
      common: string;
    };
    flags: {
      svg: string;
      alt: string;
    };
    capital: string;
    region: string;
    subregion: string;
    population: number;
    languages?: {
      [key: string]: string;
    };
  };
};

const CountryInfo: FC<Country> = ({ country }) => {
  const { region, subregion, capital, population, languages, name, flags } =
    country;
  const router = useRouter();

  return (
    <section className="mt-4 py-4">
      <Button variant={"outline"} onClick={() => router.back()}>
        <ChevronLeft size={16} />
        Back
      </Button>
      <article className="mt-4 flex flex-col md:flex-row md:justify-center w-full gap-4">
        <Card className="flex-none w-full md:w-[400px]">
          <CardHeader>
            <CardTitle>{name.common}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <div className="">
                <span className="flex gap-2">
                  <h1 className="font-bold">Capital:</h1>
                  <h6 className="font-light">{capital}</h6>
                </span>
                <span className="flex gap-2">
                  <h1 className="font-bold">Region:</h1>
                  <h6 className="font-light">{region}</h6>
                </span>
                <span className="flex gap-2">
                  <h1 className="font-bold">Subregion:</h1>
                  <h6 className="font-light">{subregion}</h6>
                </span>
                <span className="flex gap-2">
                  <h1 className="font-bold">Population:</h1>
                  <h6 className="font-light">{population}</h6>
                </span>
                <span className="flex flex-col gap-2">
                  <h1 className="font-bold">Languages:</h1>
                  <h6 className="font-light">
                    {Object.values(languages).map((language) => (
                      <Badge key={language}>{language}</Badge>
                    ))}
                  </h6>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="relative md:w-[400px] h-64 p-2 overflow-hidden rounded">
          <Image
            src={flags.svg}
            fill
            alt={flags.alt}
            className="object-contain"
          />
        </div>
      </article>
    </section>
  );
};

export default CountryInfo;
