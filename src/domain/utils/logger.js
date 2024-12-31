
/**
 * 
 * @param {string} message 
 * @param {*} data 
 * @returns 
 */
export const logInfo = (message, data) => console.info(`[INFO] [${new Date().toISOString()}] ${message}`, data || '')


/**
 * 
 * @param {string} message 
 * @param {*} error 
 * @returns 
 */
export const logError = (message, error) => console.error(`[ERROR] [${new Date().toISOString()}] ${message}`, error || '')
