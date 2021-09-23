import React, {useMemo} from 'react'
import {useCallback} from 'react'
import {createContext} from 'react'
import {useLocalStorage} from '../hooks/useLocalStorage'

export const LikedPhotosContext = createContext()

const LikedPhotosContextProvider = ({children}) => {
  const [classifiedPhotos, setClassifiedPhotos] = useLocalStorage({
    key: 'classified-photos',
    initialValue: [],
  })

  const addNewClassifiedPhoto = useCallback(
     newValue => {
      setClassifiedPhotos(prev => [...prev, newValue])
    },
    [setClassifiedPhotos],
  )

  const value = useMemo(
    () => ({
      classifiedPhotos,
      setClassifiedPhotos: addNewClassifiedPhoto,
    }),
    [classifiedPhotos, addNewClassifiedPhoto],
  )

  return (
    <LikedPhotosContext.Provider value={value}>
      {children}
    </LikedPhotosContext.Provider>
  )
}

export default LikedPhotosContextProvider
