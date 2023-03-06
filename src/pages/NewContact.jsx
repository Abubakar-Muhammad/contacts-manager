import React, { useEffect, useState } from 'react'
import styles from './NewContact.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { useContact } from '../context/ContactProvider'

//Component to add and update contacts
const NewContact = () => {
  const [contact, setContact] = useState({ id: '', name: '', number: '' })

  const { setContacts } = useContact()

  const navigate = useNavigate()

  const location = useLocation()

  useEffect(() => {
    if (location.state) {
      setContact(location.state.contact)
    }
  }, [])

  const insertContact = (contact) => {
    setContacts((prev) => [...prev, contact])
  }

  const updateContact = (contactToBeUpdated) => {
    console.log(contactToBeUpdated)
    setContacts((prev) =>
      prev.map((contact) => {
        return contact.id === contactToBeUpdated.id
          ? contactToBeUpdated
          : contact
      })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (contact.name === '' || contact.number === '') {
      alert('Form cannot be empty')
      return
    }
    if (contact.number.length < 6) {
      alert('Number must be greater than 6 characters')
      return
    }

    // Check if id exists and update contact otherwise insert a new contact
    contact.id !== ''
      ? updateContact(contact)
      : insertContact({ ...contact, id: uuid() })
    navigate('/')
  }

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  return (
    <div className='card'>
      <Link to='/' replace={true} className={styles.times}>
        <span>&times;</span>
      </Link>
      <h2 className={styles.header}>
        {location.state ? 'Update Contact' : 'New Contact'}
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type='hidden' name='id' value={contact.id} />
        <input
          type='text'
          name='name'
          placeholder='Name'
          className={styles.input}
          value={contact.name}
          onChange={handleChange}
          required
        />
        <input
          type='tel'
          name='number'
          placeholder='000'
          value={contact.number}
          className={styles.input}
          onChange={handleChange}
          required
          pattern='^([\+])?[0-9]{10,14}'
          maxLength={14}
        />
        <input
          type='submit'
          value={location.state ? 'Update' : 'Add'}
          className={styles.btn}
        />
      </form>
    </div>
  )
}

export default NewContact
