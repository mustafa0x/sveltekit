import {db} from '$lib/db.js'

export const get = async (event) => {
    const cat = db.prepare('SELECT id, name, slug FROM cat WHERE slug = ?').get(event.params.slug)
    const posts = db.prepare('SELECT slug, title FROM post WHERE cat_id = ?').all(cat.id)
    return {
        status: 200,
        body: {cat, posts},
    }
}
