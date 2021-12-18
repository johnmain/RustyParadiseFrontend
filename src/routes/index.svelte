<svelte:head>
	<title>Home</title>
</svelte:head>
<script>
    import {getRustNews, getRPNews, getRPVIPS } from '$lib/data/index/cardData.js';
    import Hero from '$lib/components/home/hero.svelte';
    import Card from '$lib/components/home/newscard.svelte'
    
</script>
<Hero/>

<div class="grid lg:grid-cols-3 gap-4 mb-6 ">
    {#await getRustNews()}
        <p>loading...</p>
        {:then news}
            <Card data={news} title='Rust Updates'/>
    {/await}
    
    {#await getRPNews()}
        <p>loading...</p>
        {:then news}
            <Card data={news} title='Rusty Paradise News'/>
    {/await}
    
    {#await getRPVIPS()}
        <p>loading...</p>
        {:then vips}
            <Card data={vips} title='Recent VIP Purchases'/>
    {/await}

</div>
