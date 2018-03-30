import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
// 1
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { BrowserRouter } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// 2
const httpLink = new HttpLink({ uri: 'http://104.236.41.59/graphql' })

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// 4
ReactDOM.render(
  <BrowserRouter>
  <MuiThemeProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </MuiThemeProvider>
  </BrowserRouter>
  , document.getElementById('root')
)
registerServiceWorker()