/** @type {import('tailwindcss').Config} */
import sharedConfig from "@repo/tailwind-config/tailwind.config.js"

export default {
	...sharedConfig,
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
}