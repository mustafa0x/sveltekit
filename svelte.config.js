import path from 'path'
import fs from 'fs'
import adapter from '@sveltejs/adapter-node'
import autoimport from 'svelte-preprocess-autoimport'
import svelte_preprocess from 'svelte-preprocess'

const r = f => fs.readFileSync(f, 'utf8')
const {name: APP_NAME} = JSON.parse(r('./package.json'))

function markup_repls({content}) {
    content = content.replace(/<icon id=(.+?)>/g, (_, id) => {
        return `<svg class="icon icon-${id}"><use href=/icons.svg#${id}></svg>`
    })
    content = content.replace(/(?<=<a )(?=href="?https?:)/g, 'target=_blank ')
    return {code: content}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        vite: {
            resolve: {
                alias: [{find: '~', replacement: path.resolve('src')}],
            },
            define: {
                APP_NAME: `'${APP_NAME}'`,
            },
            server: {strictPort: false},
        },
        prerender: {
            default: true,
        },
    },
    preprocess: [
        {markup: markup_repls},
        autoimport(),
        svelte_preprocess({markupTagName: 'not_a_tag'}),
    ],
}

export default config
