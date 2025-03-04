import './App.css'
import { Route } from 'wouter';

import ListUsers from './components/listUsers/ListUsers';
import Home from './components/pages/home/Home';
import ListPosts from './components/listPosts/ListPosts';

function App() {

  return (
    <>
      <div>
        <Route component={Home} path='/' />
        <Route component={ListUsers} path='/users' />
        <Route component={ListPosts} path='/posts' />
      </div>
    </>
  )
}

export default App;
