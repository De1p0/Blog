<script lang="ts">
	import profile from '$lib/assets/profile.jpg';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const PATHS = [
		{ name: 'index', path: '/' },
		{ name: 'work', path: '/work' },
		{ name: 'projects', path: '/projects' }
	] as const;
</script>

<div class="z-500 mb-10 flex h-15 w-full items-center justify-between text-primary-text-darker">
	<ul class="flex w-full list-none items-center gap-5 text-lg">
		<li>
			<img src={profile} alt="profile" class="h-8 w-8 rounded-full object-cover" />
		</li>

		{#each PATHS as link (link.path)}
			<li
				class:text-primary-text={page.url.pathname === link.path}
				class="font-monda transition-colors hover:text-soft"
			>
				<a href={resolve(link.path)}>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>

	dark
</div>
