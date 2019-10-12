<script>
    import CatalogGrid from 'lib/catalog/catalog-grid.svelte'
    import CatalogItem from 'lib/catalog/catalog-item.svelte'
    export let catalog = {};
</script>

<CatalogGrid items={catalog.courses} let:item}>
    <div slot="item">
        <CatalogItem item="{item}"/>
    </div>
</CatalogGrid>