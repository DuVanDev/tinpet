import React, {useContext} from 'react'
import {LikedPhotosContext} from '../../context/LikedPhotosContext'
import {Main} from '../../Styles/globalStyles'
import Loading from '../atoms/Loading'
import PetCard from '../molecules/PetCard/PetCard'
import SwipeSlider from '../organims/SwipeSlider/SwipeSlider'

const Home = ({pets = [], updateIndex}) => {
  const {setClassifiedPhotos} = useContext(LikedPhotosContext)

  const handlerCalification = (index, isLiked) => {
    updateIndex(index)
    setClassifiedPhotos({photo: pets[index], isLiked: isLiked})
  }
  if (pets.length == 0) {
    return <Loading />
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
