import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSetSearchParams } from '@/app/hooks/useSetSearchParams';
import { Pages } from '@/app/types/Pages';
import { SearchParams } from '@/app/types/SearchParams';

type Props = {
  types: string[];
};
const initialSelectValue = 'init';

export const SelectProducts: React.FC<Props> = ({ types }) => {
  const [value, setValue] = useState(initialSelectValue);
  const setSearchParams = useSetSearchParams(Pages.products);
  const searchParams = useSearchParams();
  const filterParam = searchParams.get(SearchParams.filter);

  useEffect(() => { 
    setValue(filterParam ? filterParam: initialSelectValue);
  },[filterParam])

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = event.target.value;

    setSearchParams(
      SearchParams.filter,
      selectValue === 'clear' ? null : selectValue,
    );
  };

  return (
    <select
      className="form-select multiple"
      value={value}
      onChange={handleOnChange}
    >
      <option value="init" disabled hidden>
        Select product type
      </option>
      {value !== initialSelectValue && <option className='text-danger bg-muted' value="clear">clear filter</option>}
      {types.map(type => (
        <option value={type} key={type}>{type}</option>
      ))}
    </select>
  );
};
