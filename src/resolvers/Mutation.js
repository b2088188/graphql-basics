import { v4 as uuidv4 } from 'uuid';

let Mutation = {
	createUser(parent, args, { db }, info) {
		const emailTaken = db.users.some((user) => {
			return user.email === args.data.email;
		});
		if (emailTaken) throw new Error('The email already exist.');
		const user = {
			id: uuidv4(),
			...args.data
		};
		db.users.push(user);
		return user;
	},
	deleteUser(parent, args, { db }, info) {
		const user = db.users.find((user) => user.id === args.id);
		if (!user) throw new Error('User not found');
		db.users = users.filter((el) => el.id !== user.id);
		db.posts = posts.filter((el) => el.author !== user.id);
		db.comments = db.comments.filter((el) => el.author !== user.id);
		return user;
	},
	deletePost(parent, args, { db }, info) {
		const post = db.posts.find((el) => el.id === args.id);
		if (!post) throw new Error("The post doesn't exist");
		db.posts = db.posts.filter((el) => el.id !== post.id);
		db.comments = db.comments.filter((el) => el.post !== post.id);
		return post;
	},
	deleteComment(parent, args, { db }, info) {
		const comment = db.comments.find((el) => el.id === args.id);
		if (!comment) throw new Error("The comment doesn't exist");
		return comment;
	},
	createPost(parent, args, { db }, info) {
		const user = db.users.find((user) => user.id === args.data.author);
		if (!user) throw new Error("The user doesn't exist.");
		const post = {
			id: uuidv4(),
			...args.data
		};
		db.posts.push(post);
		return post;
	},
	createComment(parent, args, { db }, info) {
		const user = db.users.find((user) => user.id === args.data.author);
		if (!user) throw new Error("The user doesn't exist.");
		const post = db.posts.find((post) => post.id === args.data.post);
		if (!post || !post.published) throw new Error("The post doesn't exist.");
		const comment = {
			id: uuidv4(),
			text: args.data.text,
			author: user.id,
			post: post.id
		};
		db.comments.push(comment);
		return comment;
	}
};

export default Mutation;
