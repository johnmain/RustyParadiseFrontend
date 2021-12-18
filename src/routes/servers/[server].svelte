<script>
    import { page } from '$app/stores';
    import Subnav from "$lib/components/servers/subnav.svelte";
    export let server;
    export let data;
</script>
<Subnav servername={$page.params.server}/>