import { GraphQLServer } from 'graphql-yoga';

// Demo user data
let users = [{id: '1', name: 'Shunze', email:'shunze@gmail.com',age: 25}, {id: '2', name: 'Sarah', email:'sarah@gmail.com'}, {id: '3', name: 'Mike', email:'mike@gmail.com',age: 29}];
let posts = [{id: '1', title: 'Title 1', body:'Body 1',published: false, author:'1', comments: '1'}, {id: '2', title: 'Title 2', body:'Body 2', published: true, author:'2', comments: '2'}, {id: '3', title: 'Title 3', body:'Body 3',published: false, author:'3', comments: '3'}]
let comments = [{id:'1', text:'Text1', author: '1', post: '1'}, {id:'2', text:'Text2', author: '2', post: '2'}, {id:'3', text:'Text3', author: '3', post: '3'}, {id:'4', text:'Text4', author: '3',  post: '3'}]
// Type definitions (schema)
const typeDefs = `
	type Query {	
		users(query:String): [User!]!
		posts(query: String): [Post!]!
		comments: [Comment!]!
		me: User!
		post: Post!
	}

	type User{
		id: ID!
		name: String!
		email: String!
		age: Int
		posts: [Post!]!
		comments: [Comment!]!
	}

	type Post {
		id: ID!
		title: String!
		body:String!
		published:Boolean!
		author: User!
		comments: [Comment!]!
	}

	type Comment{
		id: ID!
		text: String!
		author: User!
		post: Post!
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
      },
      comments(){
      	return comments;
      }
   },
   Post: {
   	// Reference Post to User
   	author(parent, args, ctx, info){
   		return users.find(el => el.id === parent.author)
   	},
   	comments(parent, args, ctx, info){
   		return comments.filter(el => el.id === parent.comments)
   	}
   },
   User: {
   	// Reference User to Post
   	posts(parent, args,ctx,info){
   		return posts.filter(el => el.author ===parent.id)
   	},
   	comments(parent, args,ctx,info){
   		return comments.filter(el => el.author === parent.id);
   	}
   },
   Comment: {
   	author(parent, args,ctx,info){
   		return users.find(el => el.id === parent.author);
   	},
   	post(parent, args,ctx,info){
   		return posts.find(el => el.id === parent.post);
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
