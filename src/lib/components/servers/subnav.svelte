<script>
    export let servername;
    export let currentPage;
    let pageNav =[
        {
            "Page":"Player Stats",
            "URL":"/servers/"+servername+"/playerstats"
        },
        {
            "Page":"Server Stats",
            "URL":"/servers/"+servername+"/serverstats"
        },
        {
            "Page":"Map",
            "URL":"/servers/"+servername+"/map"
        },
        {
            "Page":"Plugins",
            "URL":"/servers/"+servername+"/plugins"
        }, {
            "Page":"Connect to Server",
            "URL":"/servers/"+servername+"/connect"
        }
    ];
</script>
<div class="grid lg:grid-cols-5 gap-4 mb-6 ">
    {#each pageNav as page}
    <a href="{page.URL}" class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300" class:active={currentPage == page.URL}>{page.Page}</a>
    {/each}
</div>

<style>
    .active {
        @apply text-red-700 
    }
   
</style>