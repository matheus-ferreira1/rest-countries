import { FC } from "react";
import { ToggleTheme } from "./ToggleTheme";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="border-b flex justify-between items-center py-4">
      <h1 className="font-bold text-xl">Countries</h1>
      <ToggleTheme />
    </header>
  );
};

export default Header;
