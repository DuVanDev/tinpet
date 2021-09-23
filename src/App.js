import Header from './components/organims/Header/Header'
import {GlobalStyles} from './Styles/globalStyles'

import Routes from './Routes'
import {Helmet} from 'react-helmet'

function App() {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <title> TinPet 🐶</title>
        <meta name="description" content="Your best app to show photo pets " />
      </Helmet>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </>
  )
}

export default App
