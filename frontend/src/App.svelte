<script>
	import Metamask from "./Metamask.svelte";

	export let projectTitle;

	let publicWalletAddressOfVisitor;
	let connectedToChainId;

	async function handleWalletConnected(event) {
		publicWalletAddressOfVisitor = event.detail.publicWalletAddress;
		connectedToChainId = event.detail.chainId;
	};

</script>

<main>
	<h1>{projectTitle}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>

	<Metamask
		on:walletConnected={handleWalletConnected}
	/>

	{#if publicWalletAddressOfVisitor != undefined}
		<p><br /></p>
		You are connected with wallet:
		<p />
		{publicWalletAddressOfVisitor} <p></p>
		on chain Id: <p></p>
		{connectedToChainId}
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
