import {animated, useSpring} from '@react-spring/web'
import styled from 'styled-components'
import sadDog from '../../assets/sad-dog.gif'

const Article = styled(animated.article)`
  margin: 2rem;
  text-align: center;
  & img {
    width: 3rem;
    margin-bottom: 2rem;
  }
`

export const Feedback = ({message}) => {
  const styles = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
  })

  return (
    <Article style={styles}>
      <img src={sadDog} />
      <p>{message} </p>
    </Article>
  )
}
