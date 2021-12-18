<script>
    import { page } from '$app/stores';
    import Navbar from "$lib/components/servers/navbar.svelte";
</script>
<Navbar currentPage={$page.path}/>
<slot/>