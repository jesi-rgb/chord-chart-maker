<script>
	import '../app.postcss';
	import Footer from '../lib/Components/Footer.svelte';
</script>

<div class="md:max-w-xl print:max-w-[210mm] print:mx-auto mx-10 my-10">
	<slot />
	<Footer />
</div>
