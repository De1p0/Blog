<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import TitleBar from '$lib/components/layout/TitleBar.svelte';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
</svelte:head>

<div class="relative flex h-full min-h-screen w-screen justify-center bg-background">
	<div class="relative z-10 m-5 h-full w-full max-w-3xl">
		<TitleBar />
		{@render children()}
	</div>
</div>
