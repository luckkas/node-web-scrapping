
/**
 * 
 * @param {number} seconds
 * @returns {Promise<void>} 
 */
export const delay = (seconds) =>  {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}


/**
 * This function returns a integer value between some min and max numbers
 * e.g. min = 1000 and max = 2000 
 * @param {number} min 
 * @param {number} max 
 * @returns {number} random value
 */
export  const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min 
}