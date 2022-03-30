<script>
import {session} from '$app/stores'
</script>

<header>
  <nav class="flex justify-between py-1 mb-4 border-b-[1px] border-gray-300">
    <span>
      <a href="/">Home</a>
      {#if $session.cat}
        / <a href=/cat/{$session.cat.slug}>{$session.cat.name}</a>
      {/if}
    </span>
    <a href=/cat>Categories</a>
  </nav>
</header>
