import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const arr = Array.from({ length: 10 });

  return (
    <section className="mt-4 py-4 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {arr.map((_, i) => (
        <article
          key={i}
          className="p-4 min-w-full border rounded flex flex-col gap-4"
        >
          <Skeleton className="p-4 min-w-full h-40 border rounded" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-16 h-8" />
        </article>
      ))}
    </section>
  );
}
