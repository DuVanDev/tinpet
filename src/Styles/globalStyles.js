import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

	box-sizing: border-box;
	font-size: 62.5%;

	*, *::before, *::after{
		box-sizing : inherit;
	}
	
	body{
		overflow-x: hidden;
	}

`
