import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import uuidv4 from 'uuid/v4'

import { ADD_OWNER, GET_OWNERS } from '../queries'

import { Button, TextField} from '@material-ui/core'

class AddOwner extends Component {
  state = {
    firstname: '',
    lastname: ''
  }

  render() {
    const { firstname, lastname } = this.state
    const id = uuidv4()
    return (
      <Mutation
        mutation={ADD_OWNER}
        update={(store, { data: { addOwner } }) => {
          const { owners } = store.readQuery({ query: GET_OWNERS })
          store.writeQuery({
            query: GET_OWNERS,
            data: { owners: owners.concat([addOwner])}
          })
        }}
      >
        {(addOwner, { data, loading, error }) => (
          <form onSubmit={e => {
            e.preventDefault()
            addOwner({
              variables: {
                id,
                firstname,
                lastname
              },
              optimisticResponse: {
                __typename: 'Mutation',
                addOwner: {
                  __typename: 'Owner',
                  id,
                  firstname,
                  lastname
                }
              }
            })
          }}>
            <TextField
              label='Firstname'
              value={firstname}
              placeholder='i.e. Sagar'
              onChange={e => this.setState({ firstname: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            <TextField
              label='Lastname'
              value={lastname}
              placeholder='i.e. Kalyan'
              onChange={e => this.setState({ lastname: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={{ margin: '5px' }}
            >
              Add Owner
            </Button>
          </form>
        )}
      </Mutation>
    )
  }
}

export default AddOwner