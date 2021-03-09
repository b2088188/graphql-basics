// Demo user data
let users = [
	{ id: '1', name: 'Shunze', email: 'shunze@gmail.com', age: 25 },
	{ id: '2', name: 'Sarah', email: 'sarah@gmail.com' },
	{ id: '3', name: 'Mike', email: 'mike@gmail.com', age: 29 }
];
let posts = [
	{ id: '1', title: 'Title 1', body: 'Body 1', published: false, author: '1', comments: '1' },
	{ id: '2', title: 'Title 2', body: 'Body 2', published: true, author: '2', comments: '2' },
	{ id: '3', title: 'Title 3', body: 'Body 3', published: false, author: '3', comments: '3' }
];
let comments = [
	{ id: '1', text: 'Text1', author: '1', post: '1' },
	{ id: '2', text: 'Text2', author: '2', post: '2' },
	{ id: '3', text: 'Text3', author: '3', post: '3' },
	{ id: '4', text: 'Text4', author: '3', post: '3' }
];

export { users, posts, comments };
