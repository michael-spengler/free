<script>
	import Metamask from "./Metamask.svelte";
	import { ethers } from "ethers";
	import { smartContractABI } from './constants.ts';
	
	export let projectTitle;
	export let targetChainId;
	export let targetChainName;
	export let smartContractAddressOnChain;
	
	let publicWalletAddressOfVisitor;
	let connectedToChainId;
	let amountOfCoinsInSmartContractItself;
	
	async function handleWalletConnected(event) {
		publicWalletAddressOfVisitor = event.detail.publicWalletAddress;
		connectedToChainId = event.detail.chainId;
		const provider = new ethers.BrowserProvider(window.ethereum)
		//const signer = await provider.getSigner()
		let contract = new ethers.Contract(smartContractAddressOnChain, smartContractABI, provider)
		amountOfCoinsInSmartContractItself = 
		ethers.formatEther((await contract.balanceOf(smartContractAddressOnChain)));
	}
</script>

<main>
	<h1>{projectTitle}!</h1>

	<Metamask 
	targetChainId={targetChainId} 
	targetChainName={targetChainName} 
	on:walletConnected={handleWalletConnected} />

	{#if publicWalletAddressOfVisitor != undefined}
		<p><br /></p>
		You are connected with wallet:
		<p />
		{publicWalletAddressOfVisitor}
		<p />
		on chain Id:
		<p />
		{connectedToChainId}
		<p />

		You might be interested in
		<p />
		<a href="https://chainid.network/" target="_blank">chainid.network</a>
		and in
		<p />
		<a href="https://chainlist.org/" target="_blank">chainlist.org</a>

		<p><br></p>

		This dApp allows you to interact with the following smart contract: <p></p>
		{smartContractAddressOnChain} on {targetChainName}.

		<p><br></p>
		Within the smart contract itself there are currently <p><br></p>
		{amountOfCoinsInSmartContractItself} Coins.

	{:else}
		Please check Metamask Browserextension and reload.
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
