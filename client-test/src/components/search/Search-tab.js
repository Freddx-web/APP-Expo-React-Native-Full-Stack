// Recurso de para Contruccion de la Barra de Busqueda

/**
 * https://blog.logrocket.com/create-react-native-search-bar-from-scratch/
 * https://github.com/kevintomas1995/logRocket_searchBar
 * https://callstack.github.io/react-native-paper/searchbar.html>
 */
//****************************************** */

import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default MyComponent;