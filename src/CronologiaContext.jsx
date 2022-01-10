import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { api } from './services/api.js';
import { ReactNode } from 'react';





// interface CronologiaProviderProps {
//     children: ReactNode;       
// }

export const CronologiaContext = createContext([]);

export function CronologiaProvider({ children }) {

    const [conteudo, setConteudo] = useState([])


  useEffect(() => {
    api.get('cronologia').then(response => setConteudo(response.data))
  }, []);

  return (
      <CronologiaContext.Provider value={conteudo}>
          { children }
      </CronologiaContext.Provider>
  );

}