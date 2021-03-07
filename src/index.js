import { GraphQLServer } from 'graphql-yoga';

// Demo user data
let users = [{id: '1', name: 'Shunze', email:'shunze@gmail.com',age: 25}, {id: '2', name: 'Sarah', email:'sarah@gmail.com'}, {id: '3', name: 'Mike', email:'mike@gmail.com',age: 29}];
let posts = [{id: '1', title: 'Title 1', body:'Body 1',published: false}, {id: '2', title: 'Title 2', body:'Body 2', published: true}, {id: '3', title: 'Title 3', body:'Body 3',published: false}]
// Type definitions (schema)
const typeDefs = `
	type Query {	
		users(query:String): [User!]!
		posts(query: String): [Post!]!
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
   	  users(parent, args, ctx, info){
   	  	if(!args.query)
   	  	return users
   	  	return users.filter(el => el.name.match(new RegExp(args.query, 'i')))
   	  },
   	  posts(parent, args, ctx, info){
   	  	if(!args.query)
   	  		return posts;
   	  	return posts.filter(el => el.title.toLowerCase().includes(args.query.toLowerCase()))
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
