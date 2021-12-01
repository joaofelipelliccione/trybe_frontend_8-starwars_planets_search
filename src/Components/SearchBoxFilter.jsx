import React from 'react';
import Context from '../Context/Context';

function SearchBoxFilter() {
  const { filters, setFilters } = React.useContext(Context);

  return (
    <input
      data-testid="name-filter"
      type="text"
      placeholder="Filtre por nome"
      value={ filters.filterByName.name }
      onChange={ ({ target }) => setFilters({
        ...filters,
        filterByName: { name: target.value },
      }) }
    />
  );
}

export default SearchBoxFilter;
