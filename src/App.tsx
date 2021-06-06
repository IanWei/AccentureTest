import React from 'react';
import { GlobalStyle } from './globalStyles';
import { Dashboard } from './features/dashboard/components/Dashboard';

function App() {
  return (
    <div>
        <GlobalStyle />
        <Dashboard />
    </div>
  );
}

export default App;
