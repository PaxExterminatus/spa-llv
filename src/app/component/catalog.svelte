<script>
    import CatalogGrid from 'lib/catalog/catalog-grid.svelte';
    import CatalogItem from 'lib/catalog/catalog-item.svelte';
    import {CourseEntity} from 'app/entity/CatalogEntity'
    export let catalog = CourseEntity.itIs;
</script>

<CatalogGrid items={catalog.courses} let:item={item}>
    <div slot="item">
        <CatalogItem item="{item}"/>
    </div>
</CatalogGrid>