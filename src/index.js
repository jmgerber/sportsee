import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: inherit;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
)
