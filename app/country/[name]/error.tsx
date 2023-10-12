"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Error() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-3">
      <h1 className="text-4xl font-bold text-destructive">Whooops</h1>
      <h2 className="text-2xl font-bold">Page not found</h2>
      <Button variant={"outline"} onClick={() => router.back()}>
        <ChevronLeft size={16} />
        Back
      </Button>
    </div>
  );
}
