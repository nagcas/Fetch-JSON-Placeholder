import { createContext, useState } from 'react';

const Context = createContext({});

export function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  return (
    <Context.Provider value={{ users, setUsers }}>
      {children}
    </Context.Provider>
  )
}

export default Context;