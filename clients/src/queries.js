import { gql } from 'apollo-boost'

export const GET_OWNERS = gql`
  {
    owners {
      id
      firstname
      lastname
    }
  }
`

export const ADD_OWNER = gql`
  mutation AddOwner($id: String!, $firstname: String!, $lastname: String!) {
    addOwner(id: $id, firstname: $firstname, lastname: $lastname) {
      id
      firstname
      lastname
    }
  }
`

export const ADD_CAR = gql`
  mutation AddCar($id: String!, $year: String!, $make: String!, $model: String!, $price: String!, $ownerId: String!) {
    addCar(id: $id, year: $year, make: $make, model: $model, price: $price, ownerId: $ownerId) {
      id
      year
      make
      model
      price
      ownerId
    }
  }
`

export const UPDATE_OWNER = gql`
  mutation UpdateOwner($id: String!, $firstname: String!, $lastname: String!) {
    updateOwner(id: $id, firstname: $firstname, lastname: $lastname) {
      id
      firstname
      lastname
    }
  }
`

export const UPDATE_CAR = gql`
  mutation UpdateCar($id: String!, $year: String!, $make: String!, $model: String!, $price: String!, $ownerId: String!) {
    updateCar(id: $id, year: $year, make: $make, model: $model, price: $price, ownerId: $ownerId) {
      id
      year
      make
      model
      price
      ownerId
    }
  }
`

export const REMOVE_OWNER = gql`
  mutation RemoveOwner($id: String!) {
    removeOwner(id: $id) {
      id
      firstname
      lastname
    }
  }
`

export const GET_CAR = gql`
  {
    addcars {
      id
      year
      make
      model
      price
      owner
    }
  }
`