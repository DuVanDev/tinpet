import React, {useEffect} from 'react'
import Home from './components/pages/Home'
import Likes from './components/pages/Likes'
import Profile from './components/pages/Profile'
import RandomList from './containers/RandomList'

import {Redirect, Route, Switch, useLocation} from 'react-router'
import {useTransition, animated} from 'react-spring'

const Routes = () => {
  const location = useLocation()

  const transitions = useTransition(location, {
    from: {
      position: 'absolute',
      marginTop : '4rem',
      width: '100%',
      opacity: 0,
    },
    enter: {opacity: 1},
    leave: {
      opacity: 0,
    },
  })

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/">
          <RandomList>
            {({randomList, setIndex}) => (
              <Home updateIndex={setIndex} pets={randomList} />
            )}
          </RandomList>
        </Route>
        <Route exact path="/likes">
          <Likes />
        </Route>
        <Redirect to='/' />
      </Switch>
    </animated.div>
  ))
}

export default Routes
