<Header/>

<main>
  <slot/>
</main>

<footer class="text-center py-1 mt-4 border-t-[1px] border-gray-300">
<span>© (<a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC</a>)</span>
</footer>

<div class=request-indicator class:active={$navigating}/>

<script>
import {page, navigating} from '$app/stores'
import Header from '~/Header.svelte'
import '~/css/tailwind.css'
import '~/css/base.css'
</script>
