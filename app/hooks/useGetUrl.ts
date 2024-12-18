import { usePathname } from 'next/navigation';

export const useGetUrl = () => {
  const pathName = usePathname();

  if (pathName === '/') return pathName;

  const pageName = pathName.split('/').slice(-1);

  return `/${pageName}`;
};
