<script>
export let justify = 'flex-start';

</script>

<style>

div {
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: repeat(10, max-content); */
  grid-row-gap: var(--space-base);
}

div :global(button:not(:first-child):not(:last-child)) {
  border-radius: 0px;
}

div :global(button:first-child) {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

div :global(button:last-child) {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

</style>

<div class=button-group style="justify-content: {justify};">
  <slot></slot>
</div>