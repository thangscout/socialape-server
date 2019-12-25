let db = {
	users: [
		{
			userId: "aadasdsdsd21312312",
			email: "user@gmail.com",
			handle: "user",
			createdAt: "2019-12-06T02:23:55.480Z",
			imageUrl: "image/asdasdsad",
			bio: "Hello, my name is user, nice to meet you",
			website: "https://user.com",
			location: "Lodon, UK"
		}
	],
	screams: [
		{
			userHandle: 'user',
			body: ' this is th scream body',
			createdAt: "2019-12-06T02:23:55.480Z",
			likeCount: 5,
			commentCount: 2
		}
	],
	comments: [
		{
			userHandle: "user",
			screamId: "sdasdasdesfasd",
			body: "nice one mate!",
			createdAt: "2019-12-06T02:23:55.480Z"
		}
	],
	notifications: [
		{
		  recipient: 'user',
		  sender: 'john',
		  read: 'true | false',
		  screamId: 'kdjsfgdksuufhgkdsufky',
		  type: 'like | comment',
		  createdAt: '2019-03-15T10:59:52.798Z'
		}
	]
};

const userDetaisls = {
	// Redux data
	credentials: {
		userId: "aadasdsdsd21312312",
		email: "user@gmail.com",
		handle: "user",
		createdAt: "2019-12-06T02:23:55.480Z",
		imageUrl: "image/asdasdsad",
		bio: "Hello, my name is user, nice to meet you",
		website: "https://user.com",
		location: "Lodon, UK"
	},
	likes: [
		{
			userHandle: "user",
			screamId: "adasdadasd123123124asda"
		},
		{
			userHandle: "user 01",
			screamId: "asdd324f234234"
		}
	]
};