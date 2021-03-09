let Comment = {
	author(parent, args, { db }, info) {
		return db.users.find((el) => el.id === parent.author);
	},
	post(parent, args, { db }, info) {
		return db.posts.find((el) => el.id === parent.post);
	}
};

export default Comment;
