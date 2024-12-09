'use client';

import { useTranslation } from 'react-i18next';

export const SearchForm = () => {
  const { t } = useTranslation('common');
  const placeholder = t('search');

  return (
    <form className="form-outline ">
      <input
        type="search"
        id="search"
        className="form-control text-truncate"
        placeholder={placeholder}
        aria-label="Search"
        disabled
      />
    </form>
  );
};
