import { useState } from 'react'

// Custom hook to save and load data from localstorage
function useLocalStorage(key, initialState) {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    return getLocalStorageValue(key, initialState)
  })

  function setValue(value) {
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value

    setLocalStorageValue(value)

    localStorage.setItem(key, JSON.stringify(valueToStore))
  }
  return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}
export default useLocalStorage
