import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.tsx"],
	splitting: false,
	sourcemap: true,
	clean: true,
	external: ["react"],
	minify: true,
	format: ["esm"],
});
