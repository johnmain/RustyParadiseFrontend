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
            <div>
                <div class=" bg-gray-500 bg-opacity-50 p-2 flex justify-between">
                    {#if posts.link}
                        <div class="font-bold ">
                            <a class="flex justify-center items-center" href="{posts.link}" target="_blank">{posts.title}
                                <svg class="h-4 w-4 ml-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                    <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />  
                                    <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />  
                                    <line x1="16" y1="21" x2="16" y2="19" />  
                                    <line x1="19" y1="16" x2="21" y2="16" />  
                                    <line x1="3" y1="8" x2="5" y2="8" />  
                                    <line x1="8" y1="3" x2="8" y2="5" />
                                </svg>
                            </a>
                        </div>
                    {:else}
                        <div class="font-bold ">{posts.title}</div>
                    {/if}
                    <div>{posts.createdAt}</div>
                </div>
                <div class="bg-gray-700 bg-opacity-50 p-2">{@html posts.post}</div>
            </div>
            {/if}
        {/each}
        </div>
    </div>
</div>