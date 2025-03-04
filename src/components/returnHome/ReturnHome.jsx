import './ReturnHome.css';
import { Link } from "wouter";

export default function ReturnHome() {
  return (
    <>
      <div className='return'>
        <Link to='/'>Return to Home</Link>
      </div>
    </>
  )
}