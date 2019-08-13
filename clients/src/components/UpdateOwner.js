import React from 'react'
import { Mutation } from 'react-apollo'

import { UPDATE_OWNER } from '../queries'

import { Button, TextField } from '@material-ui/core'

const UpdateOwner = (props) => {
  const { id, firstname, lastname, onInputChange, onButtonClick } = props
  console.log(firstname, lastname)
  return (
    <Mutation
      mutation={UPDATE_OWNER}
      key={id}
    >
      {(updateOwner, { loading, error }) => (
        <form onSubmit={e => {
          e.preventDefault()
          updateOwner({ variables: { id, firstname, lastname }})
          onButtonClick()
        }}>
          <TextField
            defaultValue={firstname}
            placeholder='i.e. Sagar'
            onChange={e => onInputChange('firstname', e.target.value)}
            margin='normal'
            varian='outlined'
            style={{ margin: '5px' }}
          />
          <TextField
            defaultValue={lastname}
            placeholder='i.e. Kalyan'
            onChange={e => onInputChange('lastname', e.target.value)}
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
            Update Owner
          </Button>
          <Button
            onClick={onButtonClick}
            variant='contained'
            color='secondary'
            style={{ margin: '5px' }}
          >
            Cancel
          </Button>
        </form>
      )}
    </Mutation>
  )
}

export default UpdateOwner