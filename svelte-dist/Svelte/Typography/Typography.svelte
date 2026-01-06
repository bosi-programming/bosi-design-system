<script lang="ts">
    import type { Snippet } from 'svelte';
  import { type TypographyProps, getComponent, getFinalClassName } from '../../globals/Typography';

  const {
    color,
    size,
    className,
    as,
    children,
    href,
    target,
    rel,
  }: TypographyProps & {
    children: Snippet | string;
  } = $props();

  const finalClassName = $derived(
    getFinalClassName(color, size, className)
  );
  const component = $derived(getComponent(size, as));
</script>

{#snippet content()}
  {#if typeof children === 'string'}
    {children}
  {:else}
    {@render children?.()}
  {/if}
{/snippet}

{#if component === 'a'}
  <svelte:element this={component} class={finalClassName} {href} {target} {rel}>
    {@render content()}
  </svelte:element>
{:else}
  <svelte:element this={component} class={finalClassName}>
    {@render content()}
  </svelte:element>
{/if}
