import React, {useState} from 'react'
import { useEffect } from 'react'
import { GET } from '../utilities/Rest'

const RandomList = ({children}) => {
  const [randomList, setRandomList] = useState()

const getRandomList = async () => {
    try {
      const list = await GET('https://dog.ceo/api/breeds/image/random/10')
      setRandomList(list.message)
    } catch (error) {
      return console.error(error)
    }
  }

  useEffect(() => {
    getRandomList()
  }, [])

  return children({randomList})
}

export default RandomList
