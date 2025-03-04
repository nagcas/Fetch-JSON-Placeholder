export default function Errors({ error }) {

  return (
    <>
      {error && <h3>Error in loading: <span className='error'>{error}</span></h3>}
    </>
  )
}