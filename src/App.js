import React from 'react';
import './App.css';
import { AuthContextProvider } from './Context/AuthContext';
import {Header,AppShell} from './Components';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header></Header>
        <AppShell></AppShell>
      </AuthContextProvider>
    </div>
  );
}

export default App;
