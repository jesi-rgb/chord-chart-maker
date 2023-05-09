<script>
	import { Plus, Trash } from 'phosphor-svelte';
	import ChordLine from '../lib/Components/ChordLine.svelte';

	import { chordLines } from '../stores.js';
</script>

<svelte:head><title>Chord Chart Maker</title></svelte:head>

<div class="border-b-2 border-b-blue-600 mb-20">
	<input type="text" value="Título" class="font-light text-5xl text-left" />
</div>

<div class="mb-5 flex-col flex space-y-8">
	{#each { length: $chordLines } as c}
		<ChordLine />
	{/each}
</div>

<div class="flex flex-row gap-5">
	<button
		class="print:hidden justify-center w-1/2 flex text-center mx-auto py-1 border-2 border-black rounded-xl font-bold text-4xl bg-gray-50"
		on:click={() => chordLines.update((n) => n + 1)}
	>
		<Plus weight="bold" />
	</button>

	<button
		on:click={() => chordLines.update((n) => n - 1)}
		class="print:hidden bg-red-50 rounded-xl p-1 w-1/2 flex justify-center items-center border-2 border-red-600 text-red-600 font-bold text-4xl"
		><Trash /></button
	>
</div>
