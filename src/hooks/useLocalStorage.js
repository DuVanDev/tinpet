import React, {useState} from 'react'

export const useLocalStorage = ({key, initialValue}) => {
  const [valueLocal, setValueLocal] = useState(() => {
    try {
      const value = window.localStorage.getItem(key)
      return value !== null ? JSON.parse(value) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValueLocalStore = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValueLocal(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [valueLocal, setValueLocalStore]
}
