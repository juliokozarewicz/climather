import React from 'react';
import { IndexScreen } from './1_components/index';
import {openDatabaseAndCreateTable} from './1_components/0_functions/CRUD'

const App = () => {

  openDatabaseAndCreateTable();

  return (
    <IndexScreen />
  );

};

export default App;