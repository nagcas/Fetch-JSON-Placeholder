import './DetailUsers.css';
import { useContext } from 'react';
import ReturnHome from '../../returnHome/ReturnHome';
import UsersContext from '../../../context/UsersContext';

export default function DetailUsers({ params }) {

  const { id } = params;
  const {users} = useContext(UsersContext);
  const userId = Number(id);

  const user = users.find(singleUser => singleUser.id === userId);

  if (!user) {
    return (
      <>
        <p>User not found!</p>
        <ReturnHome />
      </>
    )
  }

  console.log(user);

  return (
    <>
      <h1>Detail Users #{id}</h1>
      <div className='info-user'>
        <p><span>Name:</span> {user.name}</p>
        <p><span>Username:</span> {user.username}</p>
        <p><span>Email:</span> {user.email}</p>
        <p><span>Phone:</span> {user.phone}</p>
        <p><span>website:</span> {user.website}</p>
        <hr/>
        <p><span>Address:</span> {user.address.city} - {user.address.street} - {user.address.suite} - {user.address.zipcode}</p>
        <p><span>Company:</span> {user.company.bs} - {user.company.catchPhrase} - {user.company.name}</p>
        <hr/>
      </div>
      <ReturnHome />
    </>
  )
}