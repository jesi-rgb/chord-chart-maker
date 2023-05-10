<script>
	function replacer(match, p1, p2, p3, offset, string) {
		// p1 is non-digits, p2 digits, and p3 non-alphanumerics
		const numberMap = {
			1: '<sup>1</sup>',
			3: '<sup>3</sup>',
			4: '<sup>4</sup>',
			6: '<sup>6</sup>',
			7: '<sup>7</sup>',
			9: '<sup>9</sup>'
		};

		// console.log(
		// 	p1,
		// 	p1.split('').map((x) => x),
		// 	numberMap[p1],
		// 	p1
		// 		.split('')
		// 		.map((x) => numberMap[x])
		// 		.join('')
		// );

		return p1
			.split('')
			.map((x) => numberMap[x])
			.join('');
	}

	function formatChord(inputText) {
		return inputText
			.replace('b', '♭')
			.replace('m', '<sub>m</sub>')
			.replace('aj', '<sub>aj</sub>')
			.replace(/(\d+)/g, replacer);
	}

	// let chordRef;
	let formattedString = '–';
	const evaluateChord = (e) => {
		const inputRef = e.originalTarget;
		console.log(inputRef);

		if (e.key === 'Enter' || e.key === 'Tab' || e.type === 'focusout') {
			if (e.key === 'Enter') e.preventDefault(); // no newlines accepted

			formattedString = formatChord(inputRef.innerText);
			console.log(formattedString, 'aa');
		}
	};
</script>

<!---->
<!-- test comment -->

<div
	contenteditable
	on:keydown={evaluateChord}
	on:focusout={evaluateChord}
	class="text-4xl text-left w-full font-medium"
>
	{@html formattedString}
</div>
