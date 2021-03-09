let Post = {
	// Reference Post to User
	author(parent, args, { db }, info) {
		return db.users.find((el) => el.id === parent.author);
	},
	comments(parent, args, { db }, info) {
		return db.comments.filter((el) => el.id === parent.comments);
	}
};

export default Post;
