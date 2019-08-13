import { gql } from 'apollo-server'
import { find, remove } from 'lodash'

const owners = [
  {
    id: '1',
    firstname: 'Sagar',
    lastname: 'Kalyan'
  },
  {
    id: '2',
    firstname: 'Shiva',
    lastname: 'Sid'
  }
]

const addcars = [
  {
    id: '1',
    year: '2019',
    make: 'S',
    model: 'SS150',
    price: '25000',
    owner: '1'
  },
  {
    id: '2',
    year: '2018',
    make: 'A',
    model: 'AA200',
    price: '15000',
    owner: '1'
  },
]




const typeDefs = gql`
  type Owner {
    id: String!
    firstname: String
    lastname: String
  }

  type Query {
    owners: [Owner],
    addcars: [Car]
  }

  type Mutation {
    addOwner(id: String!, firstname: String!, lastname: String!): Owner
    addCar(id: String!, year: String!, make: String!, model: String!, price: String!, owner: String!): Car
    updateOwner(id: String!, firstname: String!, lastname: String!): Owner
    updateCar(id: String!, year: String!, make: String!, model: String!, price: String!, owner: String!): Car
    removeOwner(id: String!): Owner
    removeCar(id: String!): Car
  }

  type Car {
    id: String!
    year: String
    make: String
    model: String
    price: String
    owner: String
  }
`

const resolvers = {
  Query: {
    owners: () => owners,
    addcars: () => addcars
  },
  Mutation: {
    addOwner: (root, args) => {

      const newOwner = {
        id: args.id,
        firstname: args.firstname,
        lastname: args.lastname
      }
      owners.push(newOwner)
      return newOwner
    },


    


    updateOwner: (root, args) => {

      const owner = find(owners, { id: args.id })
      if (!owner) {
        throw new Error(`Couldn't find owner with id ${args.id}`)
      }

      owner.firstname = args.firstname
      owner.lastname = args.lastname
      return owner
    },
    removeOwner: (root, args) => {
      const removedOwner = find(owners, { id: args.id })
      if (!removedOwner) {
        throw new Error(`Couldn't find owner with id ${args.id}`)
      }
      remove(owners, o => { return o.id === removedOwner.id })
      return removedOwner
    },

    addCar: (root, args) => {

      const newCar = {
        id: args.id,
        year: args.year,
        make: args.make,
        model: args.model,
        price: args.price,
        owner: args.owner,
      }
      addcars.push(newCar)
      return newCar
    },

    updateCar: (root, args) => {
      const car = find(addcars, { id: args.id })
      if (!car) {
        throw new Error(`Couldn't find car with id ${args.id}`)
      }
      car.year = args.year
      car.make = args.make
      car.model = args.model
      car.price = args.price
      car.owner = args.owner
      return car
    },
    removeCar: (root, args) => {
      const removedCar = find(addcars, { id: args.id })
      if (!removedCar) {
        throw new Error(`Couldn't find owner with id ${args.id}`)
      }
      remove(addcars, o => { return o.id === removedCar.id })
      return removedCar
    }
  }
}

export { typeDefs, resolvers }