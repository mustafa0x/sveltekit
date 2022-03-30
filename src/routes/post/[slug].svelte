<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h2 class="text-lg font-bold my-2">
  <a href=/post/{post.slug}>{post.title}</a>
</h2>

{@html post.text}

<div class=next-prev>
  {#if prev}
    <p><a href=/post/{prev.slug}><icon id=larrow> {prev.title}</a></p>
  {/if}
  {#if next}
    <p><a href=/post/{next.slug}>{next.title} <icon id=rarrow></a></p>
  {/if}
</div>

<script>
import {session} from '$app/stores'
import {browser} from '$app/env'

export let post
export let prev
export let next
export let cat

let post_
// Avoid infinite loop since we're changing session
$: if (browser && post !== post_) {
    $session = {...$session, cat}
    post_ = post
}
onDestroy(() => {
  if (browser) {
      delete $session.cat
      $session = $session
  }
})
</script>

<style>
.next-prev :nth-child(2) {
  text-align: right;
}
</style>
