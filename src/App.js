import React from 'react';
import './App.css';
import { AuthContextProvider } from './Context/AuthContext';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header></Header>
        <Login></Login>
      </AuthContextProvider>
    </div>
  );
}

export default App;
