import React, {useContext} from 'react'
import styled from 'styled-components'
import {Main} from '../../Styles/globalStyles'
import PetCard from '../molecules/PetCard/PetCard'
import {Card} from '../molecules/PetCard/PetCardStyles'
import FilterButtons from '../molecules/FilterButtons/FilterButtons'
import {LikedPhotosContext} from '../../context/LikedPhotosContext'
import {useTrail, animated} from 'react-spring'
import sadDog from '../../assets/sad-dog.gif'

const Grid = styled.div`
  margin: 2rem 2rem 9rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
  grid-auto-rows: 2fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  ${Card} {
    height: 100%;
  }
`
const Article = styled.article`
  margin: 2rem;
  text-align: center;
  & img {
    width: 3rem;
    margin-bottom: 2rem;
  }
`

const Likes = () => {
  const {classifiedPhotos} = useContext(LikedPhotosContext)

  const trail = useTrail(classifiedPhotos.length, {
    opacity: 1,
    from: {opacity: 0},
  })

  if (classifiedPhotos.length == 0) {
    return (
      <Article>
        <img src={sadDog} />
        <p>You don't have any liked or disliked photo.</p>
      </Article>
    )
  }

  return (
    <Main>
      <Grid>
        {trail.map((props, index) => {
          const {isLiked, photo} = classifiedPhotos[index]
          return (
            <animated.div key={index} style={props}>
              <PetCard isLiked={isLiked} src={photo} />
            </animated.div>
          )
        })}
      </Grid>
      <FilterButtons />
    </Main>
  )
}

export default Likes
