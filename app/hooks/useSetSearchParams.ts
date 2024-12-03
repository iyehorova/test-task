import { useRouter } from 'next/navigation';

export const useSetSearchParams = (page: string) => {
  const router = useRouter();
  let path = `${page}`;

  return (key: string, value: number | string | null) => {
    if (value) { 
      path += `?${key}=${value}`
    }
    
    router.replace(path);
  };
};
