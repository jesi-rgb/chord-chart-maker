<script>
	import '../app.postcss';
	import Footer from '../lib/Components/Footer.svelte';
</script>

<div class="max-w-sm xl:max-w-xl print:max-w-[210mm] mx-auto my-10">
	<slot />
	<Footer />
</div>
