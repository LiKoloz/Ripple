import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: 'http://217.114.0.104',  // Укажите нужный IP-адрес
		port: 4173,              // Укажите нужный порт
	  }
});
