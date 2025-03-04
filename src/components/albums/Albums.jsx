import './Albums.css';
import { useFetchAW } from '../../services/useFetchAW';
import Errors from '../errors/Errors';
import Loading from '../loading/Loading';
import ReturnHome from '../returnHome/ReturnHome';

const apiURL = 'https://jsonplaceholder.typicode.com/albums';

export default function Albums() {

  const { data, error, loading } = useFetchAW(apiURL);

  return (
    <>
      <h1>Albums</h1>
      <Errors error={error} />
      <Loading loading={loading} />
      {data?.map((item) => (
        <div key={item.id} className='albums'>
          <small>id: {item.id}</small>
          <h2>Title: {item.title}</h2>
        </div>    
      ))}
      <ReturnHome />
    </>
  )
}