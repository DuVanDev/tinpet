import React, {useEffect} from 'react'
import Home from './components/pages/Home'
import Likes from './components/pages/Likes'
import Profile from './components/pages/Profile'
import RandomList from './containers/RandomList'

import {Route, Switch, useLocation} from 'react-router'
import {useTransition, animated} from 'react-spring'

const Routes = () => {
  const location = useLocation()

  console.log({location})
  const transitions = useTransition(location, {
    from: {
      position: 'absolute',
      width: '100%',
      opacity: 0,
      transform: 'translate(100% , 0)',
    },
    enter: {opacity: 1, transform: 'translate(0% , 0)'},
    leave: {opacity: 0, transform: 'translate(-50% , 0)'},
  })

  useEffect(() => {
    console.log('Montado')
  }, [])

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/">
          <RandomList>
            {({randomList}) => <Home pets={randomList} />}
          </RandomList>
        </Route>
        <Route exact path="/likes">
          <Likes />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </animated.div>
  ))
}

export default Routes
