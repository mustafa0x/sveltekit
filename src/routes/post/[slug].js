import {db} from '$lib/db.js'

export const get = async (event, ...args) => {
    const post = db.prepare('SELECT id, slug, title, text, cat_id FROM post WHERE slug = ?').get(event.params.slug)
    const prev = db.prepare('SELECT slug, title FROM post WHERE id < ? ORDER BY id DESC LIMIT 1').get(post.id)
    const next = db.prepare('SELECT slug, title FROM post WHERE id > ? ORDER BY id LIMIT 1').get(post.id)
    const cat = db.prepare('SELECT name, slug FROM cat WHERE id = ?').get(post.cat_id)
    return {
        status: 200,
        body: {post, prev, next, cat},
    }
}
