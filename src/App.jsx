import './App.css'
import { Route } from 'wouter';

import ListUsers from './components/listUsers/ListUsers';
import Home from './components/pages/home/Home';
import ListPosts from './components/listPosts/ListPosts';
import Photos from './components/photos/Photos';
import Albums from './components/albums/Albums';

function App() {

  return (
    <>
      <div>
        <Route component={Home} path='/' />
        <Route component={ListUsers} path='/users' />
        <Route component={ListPosts} path='/posts' />
        <Route component={Photos} path='/photos' />
        <Route component={Albums} path='/albums' />
      </div>
    </>
  )
}

export default App;
