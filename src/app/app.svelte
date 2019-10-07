<script>
	import {onMount} from 'svelte'

	import {api} from './api'
	import Catalog from 'lib/catalog/catalog.svelte'

	let catalog = {
		count: undefined,
		courses: undefined,
	};

	onMount(async () => {
		await api.catalog.then(resp => {
			catalog = resp.data;
		});
	});
</script>

<div class="spa-list-app">
	{#if catalog.courses}
	<Catalog products={catalog.courses} />
	{/if}
</div>