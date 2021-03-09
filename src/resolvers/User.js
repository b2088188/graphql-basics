let User = {
	// Reference User to Post
	posts(parent, args, { db }, info) {
		return db.posts.filter((el) => el.author === parent.id);
	},
	comments(parent, args, { db }, info) {
		return db.comments.filter((el) => el.author === parent.id);
	}
};

export default User;
