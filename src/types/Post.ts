export interface Meta {
	title: string;
	description: string;
	date: string;
	slug: string;
}

export interface Post {
	path: string;
	content: string;
	meta: Meta;
}

export interface BlogItem {
	pageMetaData: Post;
	pageMarkdown: string;
}
