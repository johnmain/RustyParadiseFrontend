<svelte:head>
	<title>Home</title>
</svelte:head>
<script>
    import {getRustNews, getRPNews, getRPVIPS } from '$lib/data/index/cardData.js';
    
    let vips =  getRPVIPS();
    import Modal from '$lib/components/calendarmodal.svelte'  ;
    let showModal = false  ;
    const handleToggleModal = () => {
    showModal = !showModal
  }
   
</script>

<div class=" bg-gray-700 bg-opacity-70  rounded-lg overflow-hidden mb-6">
    <div class="flex justify-start items-center px-6 py-4 text-white">
        <div><img src="images/Rusty-Paradise-Logo.png" alt="Logo"/></div>
        <div class=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis lacus venenatis sem hendrerit gravida. Duis sed nunc vel purus consequat molestie ut sit amet. </div>
     </div>
</div>
<div class="grid lg:grid-cols-3  gap-4 mb-6 ">
    <div class=" bg-gray-700 bg-opacity-50  rounded-lg overflow-hidden  ">
        <div class="bg-gray-500 text-white text-md font-bold px-6 py-2">Rust Updates</div>
        <div class="px-6 py-4">
            <div>
                {#await getRustNews()}
                    <p>loading...</p>
                    {:then news}
                    {#each news as posts}
                        <div>
                            <div class=" bg-gray-500 bg-opacity-50 p-2 flex justify-between"><div class="font-bold ">{posts.title}</div><div>{posts.createdAt}</div></div><div class="bg-gray-700 bg-opacity-50 p-2">{@html posts.post}</div>
                        </div>
                    {/each}
                {/await}
            </div>
        </div>
    </div>
    <div class=" bg-gray-700 bg-opacity-50  rounded-lg overflow-hidden">
        <div class="bg-gray-500 text-white text-md font-bold px-6 py-2">Rusty Paradise News and Events</div>
            <div class="px-6 py-4">
                <h3 class="font-bold ">News</h3>
                <div>
                    {#await getRPNews()}
                        <p>loading...</p>
                        {:then news}
                        {#each news as posts}
                            <div>
                                <div class=" bg-gray-500 bg-opacity-50 p-2 flex justify-between"><div class="font-bold ">{posts.title}</div><div>{posts.createdAt}</div></div><div class="bg-gray-700 bg-opacity-50 p-2"><pre>{ posts.post}</pre></div>
                            </div>
                        {/each}
                    {/await}
                </div>
            </div>
            <div class="px-6 py-4">
                <h3 class="font-bold ">Events</h3>
                <div class="flex justify-center mt-6">
                    <button on:click={() => handleToggleModal()}>Open modal</button>
                        
                </div>
            </div>
        </div>
    <div class=" bg-gray-700 bg-opacity-50  rounded-lg overflow-hidden">
        <div class="bg-gray-500 text-white text-md font-bold px-6 py-2">Recent VIP Purchases</div>
        <div class="px-6 py-4">
            <h3 class="font-bold ">List of Supporters</h3>
            <ul>
                {#each vips as vip}
                    <li>{vip.user}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<Modal title="Edit your details" open={showModal} on:close={() => handleToggleModal()}>
</Modal>