import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		projectTitle: 'our project title'
	}
});

export default app;