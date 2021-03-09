let Query = {
	users(parent, args, { db }, info) {
		if (!args.query) return db.users;
		return db.users.filter((el) => el.name.match(new RegExp(args.query, 'i')));
	},
	posts(parent, args, { db }, info) {
		if (!args.query) return db.posts;
		return db.posts.filter((el) => el.title.toLowerCase().includes(args.query.toLowerCase()));
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
	comments(parent, args, { db }, info) {
		return db.comments;
	}
};

export default Query;
