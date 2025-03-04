import { useEffect, useState } from 'react';

export function useFetchAW(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Funzione asincrona per fare la richiesta all'API
  useEffect(() => {
    // Verifica se l'url è vuoto
    if (!url) return;

    // Loading di attesa impostato a true
    setLoading(true);
    const fetchData = async () => {
      try {
        // URL dell'API di esempio
        const response = await fetch(url);
        
        console.log(response);
        
        // Verifica se la risposra è 200 (status HTTP 200)
        if (!response.ok) {
          throw new Error('Error in the request.');
        }

        // Convertiamo la risposta in formato JSON
        const data = await response.json();
        
        // Mostra il risultato
        console.log(data);
        setData(data);
      } catch (error) {
        // Gestione degli errori      
        console.error('Error', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Chiamata alla funzione asincrona
    fetchData();

  }, [url]);

  // Restituiamo un oggetto con i dati, gli errori e lo stato di caricamento
  return { data, error, loading };
} 