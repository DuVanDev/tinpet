import React, { useMemo} from 'react'
import {createContext} from 'react'
import {useLocalStorage} from '../hooks/useLocalStorage'

export const LikedPhotosContext = createContext()

const LikedPhotosContextProvider = ({children}) => {
  const [classifiedPhotos, setClassifiedPhotos] = useLocalStorage({
    key: 'classified-photos',
    initialValue: [],
  })

  const value = useMemo(
    () => ({
      classifiedPhotos,
      setClassifiedPhotos,
    }),
    [classifiedPhotos, setClassifiedPhotos],
  )

  return (
    <LikedPhotosContext.Provider value={value}>
      {children}
    </LikedPhotosContext.Provider>
  )
}

export default LikedPhotosContextProvider
