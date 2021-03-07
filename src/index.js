import { GraphQLServer } from 'graphql-yoga';

// Type definitions (schema)
const typeDefs = `
	type Query {
		greeting(name: String): String!
		me: User!
		post: Post!
		add(a:Int!,b:Int!):Int!
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
   	greeting(parent, args, ctx, info){
   		if(args.name)
   			return `Hello, ${args.name}!`;
   		return 'Hello!'
   	},
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
      },
      add(parent, args, ctx, info){
      	return args.a + args.b;
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
