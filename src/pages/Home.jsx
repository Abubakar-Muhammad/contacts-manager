import './Home.css'
import { Link } from 'react-router-dom'
import ContactList from '../components/ContactList'

// Home page
function Home() {
  return (
    <div className='home'>
      <div className='header'>
        <h3>Contacts Manager</h3>
      </div>
      <ContactList />
      <Link to='/new'>
        <button className='btn'>Add New Contact</button>
      </Link>
    </div>
  )
}

export default Home
