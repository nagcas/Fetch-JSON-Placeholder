export default function Errors({ error }) {
  return (
    <>
      {error && <h3>Errore nel caricamento: {error}</h3>}
    </>
  )
}