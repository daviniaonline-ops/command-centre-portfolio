import { stripTypeScriptTypes } from 'node:module';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
await mkdir(new URL('../docs/modules/', import.meta.url), {recursive:true});
for(const name of ['calendar-days','targeting-fit']) {
 const source=await readFile(new URL(`../src/${name}.ts`,import.meta.url),'utf8');
 await writeFile(new URL(`../docs/modules/${name}.js`,import.meta.url),stripTypeScriptTypes(source));
}
console.log('Built reviewed production modules for the static demo.');
const base=new URL('../',import.meta.url);
let html=await readFile(new URL('docs/index.html',base),'utf8');
const css=await readFile(new URL('docs/styles.css',base),'utf8');
const parts=[];
for(const file of ['docs/modules/calendar-days.js','docs/modules/targeting-fit.js','docs/data.js','docs/app.js']) {
 let code=await readFile(new URL(file,base),'utf8');
 code=code.replace(/^import .*;\n/gm,'').replace(/^export /gm,'');
 parts.push(code);
}
html=html.replace('<link rel="stylesheet" href="styles.css">',`<style>${css}</style>`).replace('<script type="module" src="app.js"></script>',`<script type="module">${parts.join('\n')}</script>`);
await writeFile(new URL('START-HERE.html',base),html);
console.log('Built self-contained START-HERE.html.');
