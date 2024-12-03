import Image from 'next/image';
import { NavLink } from '../utils/links/NavLink';
import { NAV_LINKS } from '../constants';

export const NavigationMenu = () => {
  return (
    <nav className="navbar d-flex flex-column justify-content-center pt-5">
      <Image
        className="rounded-circle"
        src="/img/user-photo.png"
        alt="photo"
        width={100}
        height={100}
      />

      <ul
        className={`navbar-nav column-gap-4 column-gap-md-0 w-100 d-flex flex-row 
        flex-md-column justify-content-center nav pt-5 text-uppercase fw-semibold`}
      >
        {NAV_LINKS.map(link => (
          <li className="nav-item d-flex justify-content-center" key={link}>
            <NavLink href={`/${link}`} classes="nav-link">
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
