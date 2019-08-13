import React, { Component } from 'react'
import UpdateCar from './UpdateCar'

import { Card, CardContent, ListItem, ListItemText } from '@material-ui/core'
// import RemoveCar from './RemoveCar'

class Car extends Component {
  state = {
    editMode: false,
    id: this.props.id || '',
    year: this.props.year || '',
    make: this.props.make || '',
    model: this.props.model || '',
    price: this.props.price || '',
    owner: this.props.owner || '',
  }

  handleEditButtonClick = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  handleButtonClick = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render() {
    const { editMode, id, year, make, model, price, owner } = this.state

    return (
      <Card>
        <CardContent>
          {
            editMode ?
              <UpdateCar
                editMode={editMode}
                id={id}
                year={year}
                make={make}
                model={model}
                price={price}
                owner={owner}
                onButtonClick={this.handleButtonClick}
                onInputChange={this.handleInputChange}
              />
              :
              <ListItem>
                <ListItemText
                  primary={`${year} ${make} ${model} ${price}`}
                />
               
              </ListItem>
          }
        </CardContent>
      </Card>
    )
  }
}

export default Car