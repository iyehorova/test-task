import { Logo } from './Logo';
import { TimeContainer } from './TimeContainer';
import { Search } from './Search';
import { Languages } from './Languages';

export const TopMenu = () => {
  return (
    <header className="d-flex flex-row w-100 align-items-center justify-content-between">
      <Logo />
      <Search />
      <Languages />
      <TimeContainer />
    </header>
  );
};
