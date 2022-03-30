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
    return {
        status: 200,
        body: {cats},
    }
}
