import React from 'react'
import styled from 'styled-components'
import {Main} from '../../Styles/globalStyles'
import PetCard from '../molecules/PetCard/PetCard'
import {Card} from '../molecules/PetCard/PetCardStyles'
import FilterButtons from '../molecules/FilterButtons/FilterButtons'
import {useTrail, animated} from 'react-spring'
import useFilterClassifiedPhotos from '../../hooks/useFilterClassifiedPhotos'
import {Feedback} from '../atoms/Feedback'

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

const Likes = () => {
  const {classifiedPhotos, feedback, filterId, setFilterId} =
    useFilterClassifiedPhotos({
      initialValue: '1',
    })


  const trail = useTrail(classifiedPhotos.length, {
    opacity: 1,
    from: {opacity: 0},
  })

  if (classifiedPhotos.length == 0 && filterId == 1) {
    return <Feedback message={feedback} />
  }

  return (
    <Main>
      {classifiedPhotos.length ? (
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
      ) : (
        <Feedback message={feedback} />
      )}
      <FilterButtons value={filterId} onClick={value => setFilterId(value)} />
    </Main>
  )
}

export default Likes
