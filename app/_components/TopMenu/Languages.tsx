'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ChangeEvent } from 'react';
import i18nConfig from '@/i18nConfig';
import { Locales } from '@/app/types/Locales';
import { useTranslation } from 'react-i18next';

export const Languages = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = currentPathname.split('/')[1];
  const languages = Object.values(Locales);
  const { t } = useTranslation('common');

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.replace('/' + newLocale + currentPathname);
    } else {
      router.replace(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
  };

  return (
    <div className="col-1 lang">
      {!!languages.length && (
        <div className="select-wrapper">
          <select
            className="form-select"
            value={currentLocale}
            onChange={handleChange}
          >
            {languages.map(lang => (
              <option value={lang} key={lang}>
                {t(lang)}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
