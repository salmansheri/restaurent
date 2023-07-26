<script lang="ts">
    import { MoreHorizontal } from 'lucide-svelte'
	import Actions from './Actions.svelte';

</script>

<section class="px-10 md:px-20 lg:px-32 h-[calc(100vh-6rem)]">
    <table class="w-full my-10">
        <thead>
            <tr class="text-left">

                <th class="hidden md:block">Order Id</th>
                <th>Date</th>
                <th>Price</th>
                <th>Products</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="hidden md:block">333333</td>
                <td>132534</td>
                <td>$12</td>
                <td>Products</td>
                <td>Status</td>
                <td class="">
                    <Actions />
                </td>

            </tr>
        </tbody>
    </table>

</section>