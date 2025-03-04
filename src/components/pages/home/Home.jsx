import { Link } from 'wouter';

export default function Home() {
  return (
    <>
      <h1>Fetch JSON - Placeholder</h1>
      <div>
        <Link to='/users'>Users All</Link>
        <Link to='/posts'>Posts All</Link>
        <Link to='/photos'>Photos</Link>
        <Link to='/albums'>Albums</Link>
      </div>
    </>
  )
}