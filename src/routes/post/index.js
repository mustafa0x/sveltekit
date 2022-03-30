import {db} from '$lib/db.js'

export const get = async (event) => {
    const posts = db.prepare('SELECT * FROM post').all()
    return {
        status: 200,
        body: {posts},
    }
}
