import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { Pages } from '@/app/types/Pages';
import { SearchParams } from '@/app/types/SearchParams';
import { useTranslation } from 'react-i18next';

type Props = {
  types: string[];
};
const initialSelectValue = 'init';

export const FilterProducts: React.FC<Props> = ({ types }) => {
  const [value, setValue] = useState(initialSelectValue);
  const setSearchParams = useSetSearchParams(Pages.products);
  const searchParams = useSearchParams();
  const filterParam = searchParams.get(SearchParams.filter);
  const { t } = useTranslation('products');

  useEffect(() => {
    if (filterParam && types.includes(filterParam)) {
      setValue(filterParam);
    } else {
      setValue(initialSelectValue);
    }
  }, [filterParam]);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = event.target.value;

    setSearchParams(
      SearchParams.filter,
      selectValue === 'init' ? null : selectValue,
    );
  };

  const handleClear = () => {
    setValue(initialSelectValue);
    setSearchParams(SearchParams.filter, null);
  };

  return (
    <div className="d-flex column-gap-3 align-items-center position-relative">
      {!!types.length && (
        <div className="select-wrapper">
          <select
            className="form-select text-truncate"
            value={value}
            onChange={handleOnChange}
          >
            <option value="init" disabled hidden>
              {t('select-type')}
            </option>

            {value !== initialSelectValue && (
              <option className="text-body-tertiary" value="clear">
                {t('no-filter')}
              </option>
            )}

            {types.map(type => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      )}

      {filterParam && (
        <button
          type="button"
          className="btn-clear rounded-circle shadow-bottom position-absolute"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={handleClear}
        ></button>
      )}
    </div>
  );
};
