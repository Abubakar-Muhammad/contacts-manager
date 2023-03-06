import user from '../assets/user.svg'
import edit from '../assets/edit.svg'
import trash from '../assets/trash.svg'
import styles from './Contact.module.css'
import { useNavigate } from 'react-router-dom'
import { useContact } from '../context/ContactProvider'

// Component to display contact information
const Contact = ({ name, number, id }) => {
  const navigate = useNavigate()
  const { setContacts } = useContact()

  const deleteContact = (id) => {
    return (e) =>
      setContacts((prev) => prev.filter((contact) => contact.id !== id))
  }

  const updateContact = (id) => {
    return (e) => {
      navigate(`/${id}/update`, {
        state: {
          contact: {
            name,
            number,
            id,
          },
        },
      })
    }
  }

  return (
    <div className={styles.wrapper}>
      <img src={user} className={styles.userIcon} alt='Contact icon' />
      <p className={styles.textWrapper}>
        <span className={styles.nameText}>{name}</span>
        <span className={styles.numberText}>{number}</span>
      </p>
      <p className={styles.iconWrapper}>
        <span>
          <img
            onClick={updateContact(id)}
            className={`${styles.img} ${styles.editIcon}`}
            src={edit}
            alt='edit icon'
          />
        </span>
        <span>
          <img
            onClick={deleteContact(id)}
            className={`${styles.img} ${styles.trashIcon}`}
            src={trash}
            alt='delete icon'
          />
        </span>
      </p>
    </div>
  )
}

export default Contact
