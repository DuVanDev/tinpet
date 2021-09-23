import React, {useState} from 'react'
import {MdClose, MdFavorite} from 'react-icons/md'
import styled from 'styled-components'
import InputRadioWithLabel from '../../atoms/InputRadioWithLabel'

const Div = styled.div`
  background: #fff;
  padding: 2rem 0;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  max-width: 50rem;
  bottom: 0;

  & label {
    cursor: pointer;
    z-index: 1;
    display: inline-grid;
    justify-content: center;
  }
`

const InputFilter = styled(InputRadioWithLabel)`
  & input {
    visibility: hidden;
    &:checked + label {
      color: #000;
    }
  }

  & label {
    font-size: 1.5rem;
    color: #c2c3c5;
  }
`

const FilterButtons = ({value, onClick}) => {
  const handlerOnClick = e => {
    onClick(e.currentTarget.value)
  }

  return (
    <Div>
      <InputFilter
        id="all"
        callbackClick={handlerOnClick}
        value={1}
        name="filter"
        text="All"
        defaultChecked={value === '1'}
      />
      <InputFilter
        id="like"
        callbackClick={handlerOnClick}
        value={2}
        name="filter"
        text={
          <MdFavorite size={30} color={value == '2' ? '#1972D2' : '#c2c3c5'} />
        }
        defaultChecked={value === '2'}
      />
      <InputFilter
        id="dislike"
        callbackClick={handlerOnClick}
        value={3}
        name="filter"
        text={
          <MdClose size={30} color={value == '3' ? '#fd297B' : '#c2c3c5'} />
        }
        defaultChecked={value === '3'}
      />
    </Div>
  )
}

export default FilterButtons
