export default function Errors({ error }) {

  return (
    <>
      {error && <h3>Errore nel caricamento: <span className='error'>{error}</span></h3>}
    </>
  )
}