import React from 'react'
import { Query } from 'react-apollo'

import { GET_OWNERS } from '../queries'
import Owner from './Owner'

import { List, Container } from '@material-ui/core'

const Ownerlist = () => (
  <Query query={GET_OWNERS}>
    {({ loading, error, data }) => {
      console.log('data', data)
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error: {error.message}</p>
      return (
        <ul>
          {data.owners.map(({ id, firstname, lastname }) => (
            <Container key={id}>
              <List>
                <Owner
                  key={id}
                  id={id}
                  firstname={firstname}
                  lastname={lastname}
                />
              </List>
            </Container>
          ))}
        </ul>
      )
    }}
  </Query>
)

export default Ownerlist