import { useFetchAW } from '../../services/useFetchAW';
import Errors from '../errors/Errors';
import Loading from '../loading/Loading';
import ReturnHome from '../returnHome/ReturnHome';

const apiURL = 'https://jsonplaceholder.typicode.com/users';

export default function ListUsers() {

  const { data, error, loading } = useFetchAW(apiURL);

  return (
    <>
      <h1>List Users</h1>
      <Loading loading={loading} />
      <Errors error={error} />
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <ReturnHome />
    </>
  )
}