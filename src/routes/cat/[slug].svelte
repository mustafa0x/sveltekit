<svelte:head>
  <title>{cat.name}</title>
</svelte:head>

<h2 class="text-lg font-bold">{cat.name}</h2>

<ul class="list-disc ms-4">
  {#each posts as post}
    <li><a href=/post/{post.slug}>{post.title}</a></li>
  {/each}
</ul>

<script>
export let cat
export let posts
</script>
