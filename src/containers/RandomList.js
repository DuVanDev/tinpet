import React, {useCallback, useState} from 'react'
import {useEffect} from 'react'
import {GET} from '../utilities/Rest'

const RandomList = ({children}) => {
  const [randomList, setRandomList] = useState([])
  const [index, setIndex] = useState(0)

  const getRandomList = useCallback(async () => {
    try {
      const list = await GET('https://dog.ceo/api/breeds/image/random/10')
      setRandomList([...randomList, ...list.message])
    } catch (error) {
      return console.error(error)
    }
  }, [randomList])

  useEffect(() => {
    if ( randomList.length == 0 ) return
    if (index > randomList.length - 5) {
      getRandomList()
    }
  }, [index, randomList, getRandomList])

  useEffect(() => {
    getRandomList()
  }, [])

  return children({randomList, index, setIndex})
}

export default RandomList
