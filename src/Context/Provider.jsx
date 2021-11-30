import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = React.useState([]); // Criando a key "data", no estado do contexto global, para armazenar os dados oriundos da requisição à API de Star Wars.
  const [isLoading, setIsLoading] = React.useState(false);

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
  };

  return (
    <Context.Provider value={ contextObj }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired, // A prop "children" será um componente React, que é visto como "element".
};

export default Provider;
