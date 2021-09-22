import React from 'react'

import {Card} from './PetCardStyles'

const PetCard = ({src, isLiked, className}) => {
  return (
    <Card className={className} isLiked={isLiked}>
      <img draggable={false} src={src}></img>
    </Card>
  )
}

export default PetCard
