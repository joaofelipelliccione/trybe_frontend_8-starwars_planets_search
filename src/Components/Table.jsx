import React from 'react';
import Context from '../Context/Context';

function Table() {
  const { data, isLoading, filters } = React.useContext(Context); // Captando as keys necessárias, diretamente do contexto global.
  const thContent = ['Name', 'Rotation Period', 'Orbital Period',
    'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population',
    'Films', 'Created', 'Edited', 'URL'];

  const dataToUse = () => { // Tal função sempre retornará um array de objetos, que acumula informações de cada um dos planetas. Por outro lado, dependendo dos filtros aplicados pelo usuário, o respectivo array apresentará uma quantidade reduzida de objetos.
    const { filterByName: { name } } = filters;

    if (name !== '') {
      return (data.filter((planet) => planet.name.includes(name)));
    }
    return (data);
  };

  return (
    isLoading
      ? (
        <span>Carregando Informações...</span>
      )
      : (
        <table id="SWPlanetsTable">
          <thead>
            <tr>
              { thContent.map((title, index) => (
                <th scope="col" key={ index }>{ title }</th>
              )) }
            </tr>
          </thead>
          <tbody>
            { dataToUse().map((planet, index) => (
              <tr key={ index }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>
                  { planet.films.map((eachFilm, index2) => (
                    <ul key={ index2 }>
                      <li>{eachFilm}</li>
                    </ul>
                  )) }
                </td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            )) }
          </tbody>
        </table>)
  );
}

export default Table;
