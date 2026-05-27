// src/routes/blog/[slug]/+page.ts

import type { BlogItem, Meta, Post } from '../../../types/Post.js';

export const prerender = true;

export async function load({ params }) {
	const pageMeta = import.meta.glob('/src/lib/posts/*/meta.json', {
		eager: true
	});

	const pageMD = import.meta.glob('/src/lib/posts/*/post.md', {
		eager: true,
		query: '?raw',
		import: 'default'
	});

	const pageMetaData = pageMeta[`/src/lib/posts/${params.slug}/meta.json`] as Post;

	const pageMarkdown = pageMD[`/src/lib/posts/${params.slug}/post.md`] as string;

	return {
		pageMetaData,
		pageMarkdown
	} satisfies BlogItem;
}

export async function entries() {
	const pageMeta = import.meta.glob('/src/lib/posts/*/meta.json', {
		eager: true
	});

	return Object.values(pageMeta).map((metaFile) => {
		const post = (metaFile as { default: Meta }).default;
		console.log(post);
		return {
			slug: post.slug
		};
	});
}
