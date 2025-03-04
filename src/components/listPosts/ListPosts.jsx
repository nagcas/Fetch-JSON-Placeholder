import './ListPosts.css';
import { useFetch } from '../../services/useFetch';
import Errors from '../errors/Errors';
import Loading from '../loading/Loading';
import ReturnHome from '../returnHome/ReturnHome';


const apiURL = 'https://jsonplaceholder.typicode.com/posts';

export default function ListPosts() {

  const { data, error, loading } = useFetch(apiURL);
  return (
    <>
      <h1>Posts All</h1>
      <Errors error={error} />
      <Loading loading={loading} />
        {data?.map((item) => (
          <div key={item.id} className='posts'>
            <small>id: {item.id}</small>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))}
        <ReturnHome />
    </>
  )
}