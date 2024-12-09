'use client';
import Image from 'next/image';
import { NavLink } from '../utils/links/NavLink';
import { NAV_LINKS } from '../constants';
import { useTranslation } from 'react-i18next';

export const NavigationMenu = () => {
  const { t } = useTranslation('common');

  return (
    <nav className="navbar d-flex flex-column justify-content-center pt-md-5">
      <Image
        className="rounded-circle d-none d-md-block"
        src="/img/user-photo.png"
        alt="photo"
        width={100}
        height={100}
      />

      <ul className="navbar-nav column-gap-4 column-gap-md-0 w-100 d-flex flex-row flex-md-column justify-content-center nav pt-2 pt-md-5 text-uppercase fw-semibold">
        {NAV_LINKS.map(link => (
          <li className="nav-item d-flex justify-content-center" key={link}>
            <NavLink href={`/${link}`} classes="nav-link">
              {t(link)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
