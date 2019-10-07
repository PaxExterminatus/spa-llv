<script>
	import {onMount} from 'svelte'

	import {api} from 'app/api'
	import Catalog from 'lib/catalog/catalog.svelte'
	import {CatalogEntity} from 'app/entity'

	let catalog = {
		count: undefined,
		courses: undefined,
	};

	onMount(async () => {
		await api.catalog.then(resp => {
			catalog = new CatalogEntity(resp.data);
		});
	});
</script>

<div class="spa-list-app">
	{#if catalog.courses}
	<Catalog products={catalog.courses} />
	{/if}
</div>