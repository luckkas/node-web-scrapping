import sqlite from 'sqlite3'
import path from 'path'

const database = new sqlite.Database(path.join('main.db'))

const initDatabase = `
    CREATE TABLE IF NOT EXISTS books (
        book_id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        chapter TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at INTEGER NOT NULL
    )
`

database.exec(initDatabase)

export default database