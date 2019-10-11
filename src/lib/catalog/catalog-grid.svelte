<script>
    export let items = [];
</script>

<div class="catalog-grid">
    {#each items as item}
        <slot name="item" item={item}></slot>
    {/each}
</div>