import { useContext, createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { CONTACTS } from '../utils/constants'

const ContactContext = createContext()

export function useContact() {
  return useContext(ContactContext)
}

// Create a contact context provider
function ContactProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage(CONTACTS, [])

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  )
}
export default ContactProvider
