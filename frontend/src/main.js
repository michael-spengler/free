import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		projectTitle: 'our project title',
		targetChainId: 1101,
		targetChainName: "Polygon zkEVM",
		smartContractAddressOnChain: "0xAdaf68647a80A0D10476314DDA6bB1aBe08C5db7"
	}
});

export default app;