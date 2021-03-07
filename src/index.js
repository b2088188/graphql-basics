import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
	type Query {
		me: User!
		post: Post!
	}

	type User{
		id: ID!
		name: String!
		email: String!
		age: Int
	}

	type Post {
		id: ID!
		title: String!
		body:String!
		published:Boolean!
	}
`;
// Resolvers
const resolvers = {
   Query: {
      me() {
         return {
            id: 'abc123',
            name: 'Shunze',
            email: 'shunze@gmail.com',
            age: 25
         };
      },
      post() {
         return {
            id: 'abc123',
            title: 'Post title',
            body: 'Post Body',
            published: true
         };
      }
   }
};

const server = new GraphQLServer({
   typeDefs,
   resolvers
});

server.start(() => {
   console.log('The server is up');
});
