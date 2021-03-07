import {GraphQLServer} from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
	type Query {
		hello: String!
		name: String!
		location: String!
		bio: String!
	}
`
// Resolvers
const resolvers = {
	Query:{
		hello() {
			return 'This is my first query!'
		},
		name() {
			return 'Shunze Lin'
		},
		location(){
			return 'I live in Tainan.'
		},
		bio(){
			return 'I am a patient person.'
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