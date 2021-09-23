import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

	box-sizing: border-box;
	font-size: 62.5%;

	*, *::before, *::after{
		box-sizing : inherit;
	}

ul,
  li,
  h1,
  h2,
  h3,
  p,
  button {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
  }
  body {
    background: #fefefe;
    overscroll-behavior: none;
    width: 100vw;
margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#root {
	overflow-x: hidden;
  position: relative;
  height: 100vh;
} 

  .App {
    margin: 0 auto;
  height: fit-content;
  }
	
`

export const Main = styled.div`
  max-width: 50rem;
  margin: auto;
  height: 100%;
`
