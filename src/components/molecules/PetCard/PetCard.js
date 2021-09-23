import React from 'react'
import {MdFavorite, MdClose} from 'react-icons/md'

import {Card} from './PetCardStyles'

const PetCard = ({src, isLiked, className}) => {
  const Icon = isLiked ? (
    <MdFavorite size={40} color={'#1972D2'} />
  ) : isLiked == false ? (
    <MdClose size={40} color={'#fd297B'} />
  ) : null

  return (
    <Card className={className} $isLiked={isLiked}>
      {Icon}
      <img draggable={false} src={src}></img>
    </Card>
  )
}

export default PetCard
