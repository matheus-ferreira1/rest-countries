import { FC } from "react";
import { Globe2 } from "lucide-react";
import { ToggleTheme } from "./ToggleTheme";
import Link from "next/link";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="border-b flex justify-between items-center py-4">
      <Link href="/" className="flex items-center gap-2">
        <Globe2 />
        <h1 className="font-bold text-xl">Countries</h1>
      </Link>
      <ToggleTheme />
    </header>
  );
};

export default Header;
