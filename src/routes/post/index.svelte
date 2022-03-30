<svelte:head>
  <title>Posts</title>
</svelte:head>

<h1 class="text-xl font-bold mb-2">Posts</h1>
<ul class="list-disc ms-4">
  {#each posts as post}
    <li><a href=/post/{post.slug}>{post.title}</a></li>
  {/each}
</ul>

<script>
export let posts
</script>
