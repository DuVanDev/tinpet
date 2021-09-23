import React from 'react'
import styled from 'styled-components'
import loadingImg from '../../assets/loading.gif'

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    display: block;
    width: 13rem;
  }
`

const Loading = () => {
  return (
    <Div>
      <img src={loadingImg} />
    </Div>
  )
}

export default Loading
