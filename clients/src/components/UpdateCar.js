import React from 'react'
import { Mutation } from 'react-apollo'

import { UPDATE_CAR } from '../queries'

import { Button, TextField } from '@material-ui/core'

const UpdateCar = (props) => {
  const { id, year, make, model, price, owner, onInputChange, onButtonClick } = props
  console.log(id, year, make, model, price, owner)
  return (
    <Mutation
      mutation={UPDATE_CAR}
      key={id}
    >
      {(updateCar, { loading, error }) => (
        <form onSubmit={e => {
          e.preventDefault()
          updateCar({ variables: { id, year, make, model, price, owner }})
          onButtonClick()
        }}>
          <TextField
            label='Year'
            defaultValue={year}
            placeholder='i.e. 2019'
            onChange={e => onInputChange('year', e.target.value)}
            margin='normal'
            fullWidth
            varian='outlined'
            style={{ margin: '5px' }}
          />
          <TextField
            label='Make'
            defaultValue={make}
            placeholder='i.e. SS'
            onChange={e => onInputChange('make', e.target.value)}
            margin='normal'
            fullWidth
            varian='outlined'
            style={{ margin: '5px' }}
          />
          <TextField
            label='Model'
            defaultValue={model}
            placeholder='i.e. SS350'
            onChange={e => onInputChange('model', e.target.value)}
            margin='normal'
            fullWidth
            varian='outlined'
            style={{ margin: '5px' }}
          />
          <TextField
            label='Price'
            defaultValue={price}
            placeholder='i.e. 64000'
            onChange={e => onInputChange('price', e.target.value)}
            margin='normal'
            fullWidth
            varian='outlined'
            style={{ margin: '5px' }}
          />
          <TextField
            label='Owner'
            defaultValue={owner}
            placeholder='i.e. Sagar Kalyan'
            onChange={e => onInputChange('owner', e.target.value)}
            margin='normal'
            fullWidth
            varian='outlined'
            style={{ margin: '5px' }}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            style={{ margin: '5px' }}
          >
            Update Car
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

export default UpdateCar