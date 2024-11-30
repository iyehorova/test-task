
import { Logo } from "./Logo";
import { MainTime } from "./MainTime";
import { Search } from "./Search";
import { Sessions } from "./Sessions";


export const TopMenu = () => {
  return (
    <header className="d-flex flex-row w-100 align-items-center">
      <Logo />
      <Search />
      <MainTime />
      <Sessions />
    </header>
  );
};
