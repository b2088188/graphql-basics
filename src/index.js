import {GraphQLServer} from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
	type Query {
		title: String!
		price: Float!
		releaseYear: Int
		rating: Float
		inStock: Boolean!
	}
`
// Resolvers
const resolvers = {
	Query:{
		title(){
			return 'Pride and Prejudice'
		},
		price(){
			return 25.99
		},
		releaseYear(){
			return null;
		},
		rating(){
			return 4.5;
		},
		inStock(){
			return true;
		}
	}
}

const server = new GraphQLServer({
	typeDefs,
	resolvers
})

server.start(() => {
	console.log('The server is up')
})