<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1 class="text-3xl font-bold mb-2 text-center">Blog</h1>
<h2 class="text-xl font-bold mb-2">Latest posts</h2>
<div class=latest-posts>
  {#each posts as post}
    <h3><a href=/post/{post.slug}>{post.title}</a></h3>
    {@html post.text.slice(0, post.text.indexOf('</p><p>') + 3)}
  {/each}
</div>

<br>

<h1 class="text-xl font-bold mb-2">Categories</h1>
<ul class="list-disc ms-4">
  {#each cats as cat}
    <li><a href=/cat/{cat.slug}>{cat.name} — ({cat.post_count})</a></li>
  {/each}
</ul>

<script>
export let cats
export let posts
</script>

<style>
.latest-posts :global(p + h3) {
  margin-top: 1.5rem;
}
</style>
