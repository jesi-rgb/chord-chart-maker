<script>
	function replacer(match, p1, p2, p3, offset, string) {
		// p1 is non-digits, p2 digits, and p3 non-alphanumerics
		const numberMap = {
			1: '¹',
			3: '³',
			4: '⁴',
			6: '⁶',
			7: '⁷'
		};

		console.log(
			p1,
			p1.split('').map((x) => x),
			numberMap[p1]
		);
		return p1
			.split('')
			.map((x) => numberMap[x])
			.join('');
	}

	const evaluateChord = (e) => {
		const inputRef = e.target;

		if (e.key === 'Enter' || e.key === 'Tab') {
			if (inputRef.value.includes('b')) {
				console.log('flat');
				inputRef.value = inputRef.value.replace('b', '♭');
			}
			inputRef.value = inputRef.value.replace(/(\d+)/g, replacer);
			inputRef.value = inputRef.value.replace('m', 'ₘ');
		}
	};
</script>

<input
	on:submit={evaluateChord}
	on:keydown={evaluateChord}
	type="text"
	class="text-5xl text-center h-full w-full font-bold"
	value="C"
/>
