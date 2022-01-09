<script>
import postcss from "postcss";

    export let data;
    export let title;
</script>
<div class=" bg-gray-700 bg-opacity-50  rounded-lg overflow-hidden  ">
    <div class="bg-gray-500 text-white text-md font-bold px-6 py-2">{title}</div>
    <div class="px-6 py-4">
        <div>
        {#each data as posts}
            {#if posts.user}
            <div class="bg-gray-700 bg-opacity-50 p-2">{posts.user}</div>
            {:else}
                {#if posts.link} 
                    <div class="hover:cursor-pointer" onclick="window.open('{posts.link}')">
                        <div class=" bg-gray-500 bg-opacity-50 p-2 flex justify-between">
                            <div class="font-bold ">{posts.title}</div>
                            <div>{posts.createdAt}</div>
                        </div>
                        <div class="bg-gray-700 bg-opacity-50 p-2">{@html posts.post}</div>
                    </div>
                {:else}
                    <div class=" bg-gray-500 bg-opacity-50 p-2 flex justify-between">
                        <div class="font-bold ">{posts.title}</div>
                        <div>{posts.createdAt}</div>
                    </div>
                    <div class="bg-gray-700 bg-opacity-50 p-2">{@html posts.post}</div>
                {/if}
            {/if}
        {/each}
        </div>
    </div>
</div>