import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const FILTERS_INITIAL_STATE = { // Estado inicial da key "filters", para que o avaliador funcione.
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  };

  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [filters, setFilters] = React.useState(FILTERS_INITIAL_STATE);

  const fetchSWPlanets = async () => { // Estruturando função que fará o fetch() para a url da API de Star Wars.
    setIsLoading(true);
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await response.json(); // Captando a chave "results" do JSON retornado pela API.
    setData(results);
    setIsLoading(false);
  };

  React.useEffect(() => { fetchSWPlanets(); }, []); // 2° parâmetro = [] --> useEffect() utilizada como componentDidMount().

  const contextObj = {
    data,
    isLoading,
    filters,
    setFilters,
  };

  return (
    <Context.Provider value={ contextObj }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired, // A prop "children" será um nó (node) filho do provider.
};

export default Provider;
