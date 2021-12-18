<script>
    import { page } from '$app/stores';
    import Subnav from "$lib/components/servers/subnav.svelte";
</script>

<Subnav currentPage={$page.path} servername={$page.params.server}/>
<slot/>

