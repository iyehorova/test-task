import { useRouter } from 'next/navigation';
import { debounce } from '../utils/debounce';

export const useSetSearchParams = (page: string) => {
  const router = useRouter();
  let path = `${page}`;

  return debounce((key: string, value: number | string | null) => {
    if (value) {
      path += `?${key}=${value}`;
    }

    router.replace(path);
  }, 300);
};
