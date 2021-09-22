import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {MdStar, MdPerson, MdPets} from 'react-icons/md'
import styled from 'styled-components'

const Nav = styled.nav`
  background: #fff;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  position: sticky;
  display: flex;
  justify-content: space-evenly;
  & svg {
    margin: 1rem 2rem;
  }
  & a {
    &.current {
      & svg {
        fill: #1972d2;
      }
    }
  }
`

const Header = () => {
  return (
    <Nav>
      <NavLink exact to="/" activeClassName="current">
        <MdPets size={30} color={'#c2c3c5'} />
      </NavLink>
      <NavLink exact to="/likes" activeClassName="current">
        <MdStar size={30} color={'#c2c3c5'} />
      </NavLink>
      <NavLink exact to="/profile" activeClassName="current">
        {' '}
        <MdPerson size={30} color={'#c2c3c5'} />{' '}
      </NavLink>
    </Nav>
  )
}

export default Header
