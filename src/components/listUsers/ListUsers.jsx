import './ListUsers.css';
import { Link } from 'wouter';
import { useFetchAW } from '../../services/useFetchAW';
import Errors from '../errors/Errors';
import Loading from '../loading/Loading';
import ReturnHome from '../returnHome/ReturnHome';
import { useContext, useEffect } from 'react';
import UsersContext  from '../../context/UsersContext';

const apiURL = 'https://jsonplaceholder.typicode.com/users';

export default function ListUsers() {

  const { data, error, loading } = useFetchAW(apiURL);
  const {users, setUsers} = useContext(UsersContext);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);

  return (
    <>
      <h1>List Users</h1>
      <Loading loading={loading} />
      <Errors error={error} />
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <Link to={`/users/${item.id}`} className='ul__users'>{item.name}</Link>
          </li>
        ))}
      </ul>
      <ReturnHome />
    </>
  )
}