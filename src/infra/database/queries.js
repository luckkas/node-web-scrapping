import database from './storage.js'


const createBook = database.prepare(`
    INSERT INTO books (book_id, name, chapter, content, created_at)    
    VALUES (?, ?, ?, ?, ?)
`)


/**
 * {* []} args
 * @returns { Promise<{ name: string, chapter: string, content: string }> }
 */
const getBookByNameAndChapter = async (...args) => {
    return new Promise((resolve, reject) => {
        database.get(` SELECT * FROM books WHERE name = ? and chapter = ?`, 
            args,
            (err, row) => {
                if(err) reject(err)
                resolve(row)
            })        
    })
}

export {
    createBook,
    getBookByNameAndChapter
}