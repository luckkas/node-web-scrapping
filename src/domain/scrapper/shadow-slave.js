import * as cheerio from 'cheerio'
import { logInfo } from '../utils/logger.js'
import { delay, randomNumber } from '../utils/delay.js'
import { cleanText } from '../utils/text.js'
import { createBook, getBookByNameAndChapter } from '../../infra/database/queries.js'
import { nanoid } from 'nanoid'

export const executeShadow = async () => {
    let sourceURL = 'https://novelbin.com/b/shadow-slave/chapter-1-nightmare-begins'
    logInfo('Shadow Slave')
    while(true) {
        await delay(randomNumber(4, 8))
        if(sourceURL === ''){
            logInfo('Does not have next chapter')
            break;
        }


        const $ = await cheerio.fromURL(sourceURL)
        const title = $('#chr-content > h4').text()
        const title2 = $('#chr-content > p:first').text()             
        const chapterTitle = title === '' ? title2 : title
        
        const rawContent = $('#chr-content > p').filter('p').text() 
        const chapterContent = cleanText( 
            title === '' 
            ? rawContent.replace(chapterTitle, '')
            : rawContent
        )

        sourceURL = $('#next_chap').attr('href') ?? ''

        const book = await getBookByNameAndChapter('ShadowSlave', chapterTitle)
        if(book?.name !== undefined) continue
        if(chapterContent === '' || chapterTitle == '') continue
        
        const bookId = nanoid()

        createBook.run(bookId, 'ShadowSlave', chapterTitle, chapterContent, Date.now())
        logInfo(`Processed: ${chapterTitle}`)
    }
}

