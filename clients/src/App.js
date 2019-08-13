import React from 'react'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import AddOwner from './components/AddOwner'
import AddCar from './components/AddCar'
import Ownerlist from './components/Ownerlist'
import './App.css'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <h1>Rich People with Cars and GraphQL</h1>
        <AddOwner />
        <AddCar />
        <Ownerlist />
      </div>
    </ApolloProvider>
  )
}

export default App
