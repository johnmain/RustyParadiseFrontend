<script>
    export let currentPage;
    let pageNav =[
        {
            "Page":"Rusty Paradise 3x",
            "URL":"/servers/rusty3x"
        },
        {
            "Page":"Rusty Paradise 1000x",
            "URL":"/servers/rusty1000x"
        },
        {
            "Page":"Rusty Paradise",
            "URL":"/servers/rustyc"
        }
    ];
</script>
<div class="grid lg:grid-cols-3 gap-4 mb-6 ">
    {#each pageNav as page}
    <a href="{page.URL}" class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300" class:active={currentPage.split('/')[2] == page.URL.split('/')[2]}>{page.Page}</a>
    {/each}
</div>

<style>
    .active {
        @apply text-red-700 
    }
   
</style>