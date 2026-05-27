<script lang="ts">
	import { marked } from 'marked';
	import homeMD from '$lib/posts/home.md?raw';
	import type { Post } from '../types/Post';
	import { resolve } from '$app/paths';

	let posts: Post[] = $state<Post[]>([]);

	const markdownModules = import.meta.glob('$lib/posts/**/post.md', {
		query: '?raw',
		import: 'default'
	});

	const metaModules = import.meta.glob('$lib/posts/**/meta.json', {
		import: 'default'
	});

	(async () => {
		posts = await Promise.all(
			Object.entries(markdownModules).map(async ([path, resolver]) => {
				const content = await resolver();

				const metaPath = path.replace('post.md', 'meta.json');

				const meta = await metaModules[metaPath]();

				return {
					path,
					content,
					meta
				} as Post;
			})
		);
	})();
</script>

<div class="prose markdown text-primary-text">
	<!-- we dont care since we typed it out ykyk -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html marked(homeMD)}

	<div class="text-primary-text-darker">RECENT POSTS</div>

	{#each posts as post, index (index)}
		<div class="border-b border-dashed border-b-soft/20 py-2">
			<a href={resolve(`/blog/${post.meta.slug}`)} class="no-underline">
				<div class="text-primary-text">{post.meta.title}</div>
				<div class="text-primary-text-darker">{post.meta.description}</div>
			</a>
		</div>
	{/each}
</div>
