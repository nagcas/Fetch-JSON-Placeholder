import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Funzione per fare la richiesta all'API
  useEffect(() => {
    // Loading di attesa impostato su true
    setLoading(true);

    // Fetch per recuperare i dati dall'URL
    fetch(url)
      // Convertiamo la risposta in JSON
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // Memorizziamo i dati ottenuti nello stato 'data'
        setData(data);
      })
      .catch((error) => {
        console.error('Errore', error);
        
        // Se c'è stato un errore lo memorizziamo nello stato 'error'
        setError(error.message);
      })
      .finally(() => {
        // Indipendentemente dall'esito della richiesta, settiamo loading a false
        setLoading(false);
      })
  }, []);

  // Restituiamo un oggetto con i dati, gli errori e lo stato di caricamento
  return { data, error, loading };
}  