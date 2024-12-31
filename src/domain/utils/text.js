
/**
 * This function has a goal to clean text for not important data
 * @param {string} text 
 * @returns {string} text formatted
 */
export const cleanText = (text) => {
    return text
    // Remove URLs and domain patterns
    .replace(/[n|ô|vel|b|jn]\s*dot\s*c[\/\\\w]+/g, '')
        
    // Remove special characters but keep accents
    .replace(/[^\p{L}\p{N}\s\p{P}]/gu, '')
    
    // Remove multiple slashes
    .replace(/[\/\\]{2,}/g, '')
    
    // Clean extra whitespace
    .replace(/\s+/g, ' ')
    
    // Remove extra quotes
    .replace(/"{2,}/g, '"')
    
    // Clean multiple dots
    .replace(/\.{2,}/g, '...')
    
    // Final trim
    .trim()
}