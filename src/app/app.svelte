<script>
	import {onMount} from 'svelte'
	import {api} from 'app/config/api'
	import {CatalogEntity} from 'app/entity/CatalogEntity'
	import Catalog from 'app/component/catalog.svelte'

	let catalog;

	onMount(() => {
		api.catalog.then(resp => {
			catalog = new CatalogEntity(resp.data);
		});
	});
</script>

<div class="spa-list-app">
	{#if catalog}
		<Catalog catalog={catalog} />
	{/if}
</div>