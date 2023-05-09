<script>
	import { Plus, Printer, Trash } from 'phosphor-svelte';
	import ChordLine from '../lib/Components/ChordLine.svelte';

	import { chordLines } from '../stores.js';
</script>

<svelte:head><title>Chord Chart Maker</title></svelte:head>

<div class="border-b-2 border-b-blue-600 mb-20">
	<input type="text" placeholder="Título..." class="font-bold text-5xl text-left mb-5" />
	<textarea type="text" placeholder="Descripción..." class="font-light text-xl w-full" />
</div>

<div class="mb-5 flex-col flex space-y-8">
	{#each { length: $chordLines } as c}
		<ChordLine />
	{/each}
</div>

<div class="flex flex-row gap-5">
	<button
		class="print:hidden justify-center w-1/3 flex text-center mx-auto py-1 border-2 border-black rounded-xl font-bold text-4xl bg-gray-50"
		on:click={() => chordLines.update((n) => n + 1)}
	>
		<Plus weight="bold" />
	</button>

	<button
		on:click={() => chordLines.update((n) => n - 1)}
		class="print:hidden bg-red-50 rounded-xl p-1 w-1/3 flex justify-center items-center border-2 border-red-600 text-red-600 font-bold text-4xl"
		><Trash /></button
	>
	<button
		on:click={() => window.print()}
		class="print:hidden bg-blue-50 rounded-xl p-1 w-1/3 flex justify-center items-center border-2 border-blue-600 text-blue-600 font-bold text-4xl"
		><Printer /></button
	>
</div>
