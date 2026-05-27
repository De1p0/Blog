<script lang="ts">
	import { marked } from 'marked';
	import type { BlogItem } from '../../../types/Post';

	let { data } = $props<{ data: BlogItem }>();
</script>

<div class="prose markdown text-primary-text">
	<!-- we dont care since we typed it out ykyk -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html marked(data.pageMarkdown)}
</div>
