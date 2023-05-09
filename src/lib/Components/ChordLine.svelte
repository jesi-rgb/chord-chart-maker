<script>
	import Chord from './Chord.svelte';

	import { Trash } from 'phosphor-svelte';
	import { chordLines } from '../../stores.js';
</script>

<div class="flex text-3xl flex-row space-y-3 items-center justify-evenly">
	<Chord />
	|
	<Chord />
	|
	<Chord />
	|
	<Chord />
	<button
		on:click={() => chordLines.update((n) => n - 1)}
		class="print:hidden rounded-full p-1 border-2 border-red-600 text-red-600"><Trash /></button
	>
</div>
