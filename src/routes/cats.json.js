import {db} from '$lib/db.js'

export const get = async (event) => {
    return {
        status: 200,
        body: {cats: db.prepare('SELECT * FROM cat').all()},
    }
}
