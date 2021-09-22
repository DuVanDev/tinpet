import React, {useContext} from 'react'
import {LikedPhotosContext} from '../../context/LikedPhotosContext'
import {Main} from '../../Styles/globalStyles'
import PetCard from '../molecules/PetCard/PetCard'
import SwipeSlider from '../organims/SwipeSlider/SwipeSlider'

const Home = ({pets = []}) => {
  const {classifiedPhotos, setClassifiedPhotos} = useContext(LikedPhotosContext)

  const handlerCalification = (index, isLiked) => {
    setClassifiedPhotos([
      ...classifiedPhotos,
      {photo: pets[index], isLiked: isLiked},
    ])
  }


  return (
    <Main>
      <SwipeSlider
        callbackLeft={index => handlerCalification(index, false)}
        callbackRight={index => handlerCalification(index, true)}
      >
        {pets?.map((photo, key) => (
          <PetCard key={key} src={photo} />
        ))}
      </SwipeSlider>
    </Main>
  )
}

export default Home
