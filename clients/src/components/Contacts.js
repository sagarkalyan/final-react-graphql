import React from 'react'
import { Query } from 'react-apollo'

import { GET_CONTACTS } from '../queries'
import Contact from './Contact'

import { List, Container } from '@material-ui/core'

const Contacts = () => (
  <Query query={GET_CONTACTS}>
    {({ loading, error, data }) => {
      console.log('data', data)
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error: {error.message}</p>
      return (
        <ul>
          {data.contacts.map(({ id, firstName, lastName }) => (
            <Container>
              <List>
                <Contact
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                />
              </List>
            </Container>
          ))}
        </ul>
      )
    }}
  </Query>
)

export default Contacts