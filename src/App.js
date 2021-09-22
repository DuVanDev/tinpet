import Header from './components/organims/Header/Header'
import {GlobalStyles} from './Styles/globalStyles'

import Routes from './Routes'

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header />
        <Routes />
      </div>
    </>
  )
}

export default App
