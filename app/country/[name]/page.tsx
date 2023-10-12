import type { Country } from "@/app/page";
import { CountryCard } from "@/components/CountryCard";
import CountryInfo from "@/components/CountryInfo";

async function getCountryByName(name: string): Promise<Country> {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  const country = await res.json();
  return country[0];
}

async function getCountryBordersByName(name: string) {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries: Country[] = await response.json();

  const country = countries.find(
    (country: Country) => country.name.common === name
  )!;

  return country.borders?.map((border) => {
    const borderCountry = countries.find((country) => country.cca3 === border)!;
    return {
      name: borderCountry.name.common,
      flag: borderCountry.flags.svg,
      flagAlt: borderCountry.flags.alt,
    };
  });
}

export default async function CountryPage({
  params: { name },
}: {
  params: { name: string };
}) {
  const country = await getCountryByName(decodeURI(name));
  const borderCountries = await getCountryBordersByName(decodeURI(name));

  return (
    <>
      <CountryInfo country={country} />
      <h1 className="mt-8 font-bold text-xl">Bordering countries</h1>
      <section className="py-4 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {borderCountries?.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </section>
    </>
  );
}
