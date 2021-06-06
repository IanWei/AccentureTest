import React from 'react';
import { GlobalStyle } from './globalStyles';
import { Dashboard } from './features/dashboard/components/Dashboard';
import populationData from './data/population.json';

function App() {
  return (
    <div>
        <GlobalStyle />
        <Dashboard data={populationData.data}/>
    </div>
  );
}

export default App;
