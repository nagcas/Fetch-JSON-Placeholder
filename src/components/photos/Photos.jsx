import './Photos.css';
import { useFetch } from '../../services/useFetch';
import Errors from '../errors/Errors';
import Loading from '../loading/Loading';
import ReturnHome from '../returnHome/ReturnHome';

const apiURL = 'https://jsonplaceholder.typicode.com/photos';

export default function Photos() {

  const { data, error, loading } = useFetch(apiURL);

  return (
    <>
      <h1>Photos</h1>
      <Errors  error={error} />
      <Loading loading={loading} />
      {data?.map((item) => (
        <div key={item.id} className='photos'>
          <small>id: {item.id}</small>
          <h2>Title: {item.title}</h2>
          <p>Link photo: {item.url}</p>
          <p>Link thumbnailUrl: {item.thumbnailUrl}</p>
        </div>
      ))}
      <ReturnHome />
    </>
  )
}