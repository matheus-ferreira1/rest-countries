import * as React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function CountryCard() {
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Country</CardTitle>
        <CardDescription>Europe</CardDescription>
      </CardHeader>
      <CardContent>
        image placeholder
        {/* <Image src="link" fill alt="Cuntry flag" /> */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/country/name">
          <Button>More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
