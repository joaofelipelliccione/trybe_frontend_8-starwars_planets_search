import React from 'react';
import Context from '../Context/Context';

function NumericFilterForm() {
  const [column, setColumn] = React.useState('population');
  const [comparison, setComparison] = React.useState('maior que');
  const [value, setValue] = React.useState('100000');
  const numericFilterObj = { column, comparison, value }; // União dos 3 estados locais em um único objeto, para enviá-lo para o contexto global quando o botão for clicado.

  const dropdownContent1 = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const dropdownContent2 = ['maior que', 'menor que', 'igual a'];

  const { filters, setFilters } = React.useContext(Context);

  const onFilterBtnClick = () => { // Função que adiciona o numericFilterObj dentro do array filterByNumericValues, presente no contexto global.
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, numericFilterObj],
    });
  };

  return (
    <form>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {dropdownContent1.map((option, index1) => (
          <option key={ index1 }>{option}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        {dropdownContent2.map((option, index2) => (
          <option key={ index2 }>{option}</option>
        ))}
      </select>
      <input
        data-testid="value-filter"
        type="number"
        min="0"
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ onFilterBtnClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default NumericFilterForm;
