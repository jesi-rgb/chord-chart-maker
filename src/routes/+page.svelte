<script>
	import { Plus } from 'phosphor-svelte';
	import ChordLine from '../lib/Components/ChordLine.svelte';

	import { chordLines } from '../stores.js';
</script>

<input type="text" value="Título" class="font-bold text-5xl text-left mx-auto mb-10" />

<div class="mb-5">
	{#each { length: $chordLines } as c}
		<ChordLine />
	{/each}
</div>
<div
	class="print:hidden text-center mx-auto py-1 border-2 border-black rounded-xl font-bold text-4xl w-full bg-gray-50"
>
	<button on:click={() => chordLines.update((n) => n + 1)}>
		<Plus weight="bold" />
	</button>
</div>
