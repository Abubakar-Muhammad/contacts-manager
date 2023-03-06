import { useContact } from '../context/ContactProvider'
import Contact from './Contact'

// Component that displays a list of contacts
const ContactList = () => {
  const { contacts } = useContact()

  return (
    <div>
      {contacts.map((contact) => {
        return <Contact key={contact.id} {...contact} />
      })}
    </div>
  )
}

export default ContactList
