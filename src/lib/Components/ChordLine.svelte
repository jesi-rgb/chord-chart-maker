<script>
	import Chord from './Chord.svelte';

	import { Trash } from 'phosphor-svelte';
	import { chordLines } from '../../stores.js';
</script>

<div class="flex flex-row text-3xl space-x-3 items-center">
	<Chord />
	<div class="font-extralight text-gray-200">|</div>
	<Chord />
	<div class="font-extralight text-gray-200">|</div>
	<Chord />
	<div class="font-extralight text-gray-200">|</div>
	<Chord />
</div>
