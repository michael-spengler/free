import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		projectTitle: 'our project title',
		targetChainId: 1101,
		targetChainName: "Polygon zkEVM",
		smartContractAddress: 0x7309Ff3B8db9f39633EdD960CDB9E50414b2Fd53
	}
});

export default app;