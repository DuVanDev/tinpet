import React, {useCallback, useState} from 'react'
import {useEffect} from 'react'

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
      setValueLocal(value)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(valueLocal))
  }, [valueLocal, key])

  return [valueLocal, setValueLocalStore]
}
