import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    monaco: ['monaco-editor'],
                },
            },
        },
    },
});