import * as monaco from 'monaco-editor';

monaco.editor.create(document.getElementById('editor')!, {
    value: `function hello() {\n\tconsole.log("welcome to feather!");\n}`,
    language: 'typescript',
    theme: 'vs-dark',
    automaticLayout: true,
});