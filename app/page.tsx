import { CountryCard } from "@/components/CountryCard";

export type Country = {
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
  borders?: string[];
  cca3: string;
};

async function getCountries(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();

  return (
    <section className="mt-4 py-4 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          name={country.name.common}
          flag={country.flags.svg}
          flagAlt={country.flags.alt}
          region={country.region}
        />
      ))}
    </section>
  );
}
