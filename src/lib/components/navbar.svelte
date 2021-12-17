<script>
	import { page } from '$app/stores';
    let hidden = true;
    let siteName = "Rusty Paradise"
    let pageNav =[
        {
            "Page":"Home",
            "URL":"/"
        },
        {
            "Page":"Servers",
            "URL":"/servers"
        },
        {
            "Page":"Shop",
            "URL":"/shop"
        },
        {
            "Page":"Support",
            "URL":"/support"
        },
        {
            "Page":"Contact Us",
            "URL":"/contact"
        }
    ];
</script>

<nav class="bg-gray-800 shadow-lg sticky top-0">
    <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
            <div class="flex space-x-7">
                <div>
                    <!-- Website Logo -->
                    <a href="/" class="flex items-center py-4 px-2">
                        <img src="images/Rusty-Paradise-Logo.png" alt="Logo" class="h-8 w-8 mr-2">
                        <span class="font-semibold text-gray-200 text-lg">{siteName}</span>
                    </a>
                </div>
                <!-- Primary Navbar items -->
                <div class="hidden md:flex items-center space-x-1">
                    { #each pageNav as  navitem}
                    <a href="{navitem.URL}" class="py-4 px-2 text-gray-200 font-semibold hover:text-green-500 transition duration-300" class:active={$page.path == navitem.URL} on:click={() => { hidden = true }}>{navitem.Page}</a>
                    {/each}
                    
                </div>
            </div>
            <!-- Secondary Navbar items -->
            <div class="hidden md:flex items-center space-x-3 ">
                <a href="/" class="py-2 px-2 font-medium text-gray-200 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
                <a href="/" class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
            </div>
            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button class="outline-none mobile-menu-button" on:click={() => { hidden = !hidden }}>
                    <svg class=" w-6 h-6 text-gray-200 hover:text-red-700 "
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <!-- mobile menu -->
    {#if !hidden}
    <div class=" mobile-menu">
        <ul class="">
            { #each pageNav as  navitem}
            <li><a href="{navitem.URL}" class="block text-sm px-2 py-4 font-semibold transition duration-300 text-gray-200" class:active-mobile={$page.path == navitem.URL} on:click={() => { hidden = true }}>{navitem.Page}</a></li>
            {/each}
        </ul>
    </div>
    {/if}
    
</nav>

<style>
    .active {
        @apply text-red-700 border-b-4 border-red-700
    }
    .active-mobile{
        @apply text-gray-200 bg-red-700
    }
</style>