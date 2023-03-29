/**
 * Remove Object Dynamic 
 * 
 * @param {*} payload 
 * @returns 
 */

export const removeObjectDynamic = (payload) => {
  Object.keys(payload).forEach(key => {
    if (payload[key] === null || payload[key] === undefined || payload[key] === '' || payload[key].length === 0) {
      delete payload[key]
    }
  })
  return payload
}