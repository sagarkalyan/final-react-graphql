import React from 'react'
import { Mutation } from 'react-apollo'
import { Button } from '@material-ui/core'
import { GET_CONTACTS, REMOVE_CONTACT } from '../queries'
import { filter } from 'lodash'

const RemoveContact = ({ id, firstName, lastName }) => {
  return (
    <Mutation
      mutation={REMOVE_CONTACT}
      update={(store, { data: { removeContact } }) => {
        const { contacts } = store.readQuery({ query: GET_CONTACTS })
        store.writeQuery({
          query: GET_CONTACTS,
          data: { contacts: filter(contacts, c => { return c.id !== removeContact.id }) }
        })
      }}
    >
      {removeContact => (
        <Button onClick={e => {
          e.preventDefault()
          removeContact({
            variables: {
              id
            },
            optimisticResponse: {
              __typename: 'Mutation',
              removeContact: {
                __typename: 'Contact',
                id,
                firstName,
                lastName
              }
            }
          })
        }}
          variant='contained'
          color='secondary'
          style={{ margin: '5px' }}
        >
          Delete
        </Button>
      )}
    </Mutation>
  )
}

export default RemoveContact