'use client';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { useGetUrl } from '@/app/hooks/useGetUrl';

type Props = {
  classes: string;
  children: React.ReactNode;
};
export const NavLink = ({
  classes = '',
  children,
  ...rest
}: LinkProps & Props) => {
  const pageUrl = useGetUrl();
  const isActive = pageUrl === rest.href;

  return (
    <Link
      {...rest}
      className={clsx(
        classes,
        'border-bottom border-3 p-1 mb-3 width-content',
        {
          'fw-semibold border-success border-opacity-100': isActive,
          'border-opacity-0': !isActive,
        },
      )}
    >
      {children}
    </Link>
  );
};
