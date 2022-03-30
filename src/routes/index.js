import {db} from '$lib/db.js'

export const get = async (event) => {
    const cats = db.prepare(`
        SELECT *,
        (
            SELECT
                COUNT(*)
            FROM
                post
            WHERE
                cat_id=cat.id
        ) as post_count
        FROM cat
    `).all()
    const posts = db.prepare('SELECT * FROM post ORDER BY id DESC LIMIT 5').all()
    return {
        status: 200,
        body: {cats, posts},
    }
}
