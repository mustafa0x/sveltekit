import Database from 'better-sqlite3'

// process.env.NODE_ENV === 'development' is false when building
const path = (process.env.PWD.startsWith('/srv') ? '/srv/db/' : '') + APP_NAME + '.db'
export const db = new Database(path, {readonly: true})
