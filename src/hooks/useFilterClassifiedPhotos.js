import {useEffect, useState} from 'react'
import {useMemo} from 'react'
import {useContext} from 'react'
import {LikedPhotosContext} from '../context/LikedPhotosContext'

const useFilterClassifiedPhotos = ({initialValue}) => {
  const [filterId, setFilterId] = useState(initialValue)
  const [classified, setClassified] = useState({
    classified: [],
    feedback: "You don't have any liked or disliked photo.",
  })

  const {classifiedPhotos = []} = useContext(LikedPhotosContext)

  useEffect(() => {
    switch (filterId) {
      case '1':
        setClassified({
          classified: classifiedPhotos,
          feedback:
            classifiedPhotos.length == 0
              ? "You don't have any liked or disliked photo."
              : '',
        })
        break

      case '2':
        const filterLiked =
          classifiedPhotos.filter(photo => photo.isLiked) ?? []
        setClassified({
          classified: filterLiked,
          feedback:
            filterLiked.length == 0 ? "You don't have liked photo." : '',
        })
        break

      case '3':
        const filterDisliked =
          classifiedPhotos.filter(photo => !photo.isLiked) ?? []
        setClassified({
          classified: filterDisliked,
          feedback:
            filterDisliked.length == 0 ? "You don't have Disliked photo." : '',
        })
        break
      default:
        setClassified({
          classified: classifiedPhotos,
          feedback:
            classifiedPhotos.length == 0
              ? "You don't have any liked or disliked photo."
              : '',
        })
        break
    }
  }, [filterId, classifiedPhotos])

  return {
    classifiedPhotos: classified.classified,
    filterId,
    feedback: classified.feedback,
    setFilterId,
  }
}

export default useFilterClassifiedPhotos
