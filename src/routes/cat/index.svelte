<svelte:head>
  <title>Categories</title>
</svelte:head>

<h1 class="text-xl font-bold mb-2">Categories</h1>
<ul class="list-disc ms-4">
  {#each cats as cat}
    <li><a href=/cat/{cat.slug}>{cat.name} — ({cat.post_count})</a></li>
  {/each}
</ul>

<script>
export let cats
</script>
