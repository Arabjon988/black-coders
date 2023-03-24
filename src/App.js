import {useState } from 'react';
import AllRoutes from './routes/AllRoutes';
import Context from './context/Context';

import './App.css';

function App() {
  const [user, setUser] = useState({
    fullName: null,
    password: null,
  })



  const contextValue = {
    user,
    setUser,
  };

  if(user.name !== null && user.password !== null){
    localStorage.setItem('AUTH', true);
    localStorage.setItem('fullName', user.fullName);
  }
  else{
    localStorage.removeItem('AUTH');
  }


  return (
      <Context.Provider value= {contextValue} >
        <AllRoutes />
      </Context.Provider>
  );
}

export default App;
