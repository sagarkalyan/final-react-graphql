import React, { Component, Fragment } from 'react'
import UpdateOwner from './UpdateOwner'
import Car from './Car'
import { Query } from 'react-apollo'
import { GET_CAR } from '../queries'

import { Card, List, Container, Button, ListItem, ListItemText, CardContent } from '@material-ui/core'
import RemoveOwner from './RemoveOwner'


class Owner extends Component {
  state = {
    editMode: false,
    id: this.props.id || '',
    theOwnerId: this.props.id || '',
    firstname: this.props.firstname || '',
    lastname: this.props.lastname || ''
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
    const { editMode, id, firstname, lastname, theOwnerId } = this.state

    return (
      <Card>
        <CardContent>
          {
            editMode ?
              <UpdateOwner
                editMode={editMode}
                id={id}
                firstname={firstname}
                lastname={lastname}
                onButtonClick={this.handleButtonClick}
                onInputChange={this.handleInputChange}
              />
              :
              <Fragment>
                <ListItem>
                  <ListItemText
                    primary={`${firstname} ${lastname}`}
                  />
                    <Button
                      onClick={e => this.handleButtonClick()}
                      variant='contained'
                      style={{ margin: '5px' }}
                    >
                      Edit
                    </Button>
                  <RemoveOwner
                    id={id}
                    firstname={firstname}
                    lastname={lastname}
                  />
                </ListItem>
                <div>
                <Query query={GET_CAR} variables={ { owner: id } }>
                  {({ loading, error, data }) => {
                    console.log('data', data)
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error: {error.message}</p>
                    return (
                      <ul>
                        {data.addcars.map(({ id, year, make, model, price, owner }) => {
                          if (owner === theOwnerId) {
                            return (
                              <Container key={id}>
                                <List>
                                  <Car
                                    key={id}
                                    id={id}
                                    year={year}
                                    make={make}
                                    model={model}
                                    price={price}
                                    owner={owner}
                                  />
                                </List>
                              </Container>
                            )
                          }
                        }
                        )}
                      </ul>
                    )
                  }}
                </Query>
              </div>
            </Fragment>
        }
        </CardContent>
      </Card>
    )
  }
}
export default Owner