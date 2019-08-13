import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import uuidv4 from 'uuid/v4'

import { ADD_CAR, GET_CAR } from '../queries'

import { Button, TextField, Select, MenuItem } from '@material-ui/core'

class AddCar extends Component {
  state = {
    year: '',
    make: '',
    model: '',
    price: '',
    owner: '',
  }

  render() {
    const { year, make, model, price, owner } = this.state
    const id = uuidv4()
    return (
      <Mutation
        mutation={ADD_CAR}
        update={(store, { data: { addCar } }) => {
          const { addcars } = store.readQuery({ query: GET_CAR })
          store.writeQuery({
            query: GET_CAR,
            data: { addcars: addcars.concat([addCar])}
          })
        }}
      >
        {(addCar, { data, loading, error }) => (
          <form onSubmit={e => {
            e.preventDefault()
            addCar({
              variables: {
                id,
                year,
                make,
                model,
                price,
                owner
              },
              optimisticResponse: {
                __typename: 'Mutation',
                addCar: {
                  __typename: 'Car',
                  id,
                  year,
                  make,
                  model,
                  price,
                  owner
                }
              }
            })
          }}>
            <TextField
              label='Year'
              value={year}
              placeholder='i.e. 2019'
              onChange={e => this.setState({ year: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            <TextField
              label='Make'
              value={make}
              placeholder='i.e. SS23'
              onChange={e => this.setState({ make: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            <TextField
              label='Model'
              value={model}
              placeholder='i.e. SS12'
              onChange={e => this.setState({ model: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            <TextField
              label='Price'
              value={price}
              placeholder='i.e. 20000'
              onChange={e => this.setState({ price: e.target.value })}
              margin='normal'
              varian='outlined'
              style={{ margin: '5px' }}
            />
            <Select
              label='Owner'
              value={owner}
              onChange={e => this.setState({ owner: e.target.value })}
              margin='normal'
              style={{ margin: '5px' }}
            >
              <MenuItem value={'1'}>Sagar kalyan</MenuItem>
              <MenuItem value={'2'}>Shiva Sid</MenuItem>
            </Select>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={{ margin: '5px' }}
            >
              Add Car
            </Button>
          </form>
        )}
      </Mutation>
    )
  }
}

export default AddCar