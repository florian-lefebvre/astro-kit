import Vue from "@astrojs/vue";
import { createResolver, defineIntegration } from "astro-integration-kit";
import {
	addDevToolbarFrameworkAppPlugin,
	addIntegrationPlugin,
	corePlugins,
} from "astro-integration-kit/plugins";

export default defineIntegration({
	name: "test-vue-app",
	plugins: [
		...corePlugins,
		addDevToolbarFrameworkAppPlugin,
		addIntegrationPlugin,
	],
	setup: () => {
		return {
			"astro:config:setup": ({ addDevToolbarFrameworkApp, addIntegration }) => {
				const { resolve } = createResolver(import.meta.url);

				addIntegration(Vue());

				addDevToolbarFrameworkApp({
					framework: "vue",
					name: "Test Vue Plugin",
					id: "test-vue-plugin",
					icon: `<svg version="1.1" viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)"><g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/></g><g transform="translate(178.06 235.01)"><path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/></g></g></svg>`,
					src: resolve("./Test.vue"),
				});
			},
		};
	},
});
