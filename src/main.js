import App from './app/app.svelte';

const app = new App({
	target: document.getElementById('spa-list-app'),
});

window.app = app;

export default app;