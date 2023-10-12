import { CountryCard } from "@/components/CountryCard";

export default function Home() {
  return (
    <section className="mt-4 py-4 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </section>
  );
}
