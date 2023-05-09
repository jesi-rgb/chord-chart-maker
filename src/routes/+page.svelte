<script>
	import ChordLine from '../lib/Components/ChordLine.svelte';

	import { chordLines } from '../stores.js';
</script>

<input type="text" value="Título" class="font-bold text-5xl text-left mx-auto mb-10" />

<div class="mb-5">
	{#each { length: $chordLines } as c}
		<ChordLine />
	{/each}
</div>
<button
	class="print:hidden text-center mx-auto border-2 border-black rounded-xl w-full bg-gray-50"
	on:click={() => chordLines.update((n) => n + 1)}>+</button
>
