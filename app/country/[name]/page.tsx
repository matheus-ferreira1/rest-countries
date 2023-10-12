import type { Country } from "@/app/page";
import CountryInfo from "@/components/CountryInfo";

async function getCountryByName(name: string): Promise<Country> {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  const country = await res.json();
  return country[0];
}

export default async function CountryPage({
  params: { name },
}: {
  params: { name: string };
}) {
  const country = await getCountryByName(name);

  return (
    <>
      <CountryInfo country={country} />
    </>
  );
}
