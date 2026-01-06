<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import {
    type ButtonProps,
    getFinalClassName
  } from '../../globals/Button';

  interface Props extends ButtonProps, Omit<HTMLButtonAttributes, 'color' | 'class' | 'children'> {
    children: Snippet | string;
  }

  const {
    action,
    color = 'default',
    size = 'medium',
    className,
    children,
    onclick,
    ...props
  }: Props = $props();

  const buttonClasses = $derived(
    getFinalClassName(action, color, size, className)
  );
</script>

{#snippet content()}
  {#if typeof children === 'string'}
    {children}
  {:else}
    {@render children?.()}
  {/if}
{/snippet}

<button class={buttonClasses} {onclick} {...props}>
  {@render content()}
</button>
