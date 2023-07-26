<script lang="ts">
     import { MoreHorizontal, Trash } from 'lucide-svelte'; 
     let open = false; 

    const handleClick = () => {
        if(open === false) {
            open = true; 
        } else {
            open = false; 
        }
    }
     

</script>


<span class="w-auto relative">
    <button on:click={handleClick}>

        <MoreHorizontal />
    </button>
    {#if open}
    <span class=" border border-gray-500 flex flex-col items-center space-x-2 p-2 absolute -bottom-12">
        <span class="flex cursor-pointer">

            <Trash size={20} />
            Remove
        </span>
        
    </span>

        
    {/if}
  
</span>