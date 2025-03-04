import './App.css'
import { Route } from 'wouter';

import ListUsers from './components/listUsers/ListUsers';
import Home from './components/pages/home/Home';

function App() {

  return (
    <>
      <div>
        <Route component={Home} path='/' />
        <Route component={ListUsers} path='/users' />
      </div>
    </>
  )
}

export default App;
