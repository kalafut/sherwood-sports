<script>
  const host = window.location.host;
  const local = host.startsWith("localhost") || host.startsWith("127.0.0.1");
</script>

{#if !local}
  <script
    data-goatcounter="https://sherwoodsports.goatcounter.com/count"
    async
    src="//gc.zgo.at/count.js">
  </script>
{/if}
