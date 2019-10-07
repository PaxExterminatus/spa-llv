<script>
    export let products;
</script>

<div>Catalog</div>
{#each products as product}
    <div class="catalog-item">
        {product.name}
    </div>
{:else}
    <p>loading...</p>
{/each}