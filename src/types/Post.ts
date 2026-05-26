export interface Meta {
	title: string;
	description: string;
	date: string;
}

export interface Post {
	path: string;
	content: string;
	meta: Meta;
}
