/**
 * removeObjectDynamic
 * 
 * @param payload 
 * @returns 
 */

export const removeObjectDynamic = (payload: Record<string, any>): Record<string, any> => {
  const filteredPayload: Record<string, any> = {}
  for (const key in payload) {
    const value = payload[key];
    if (value !== null && value !== undefined && value !== '' && value.length !== 0) {
      filteredPayload[key] = value;
    }
  }

  return filteredPayload;
}


/**
 * Remove object deeply 
 * 
 * Remove object if has deep nesting value
 */
export const removeObjectDeepDynamic = (payload: Record<string, any>): Record<string, any> => {
  const filteredPayload: Record<string, any> = {}
  for (const key in payload) {
    if (typeof payload[key] === 'object' && payload[key] !== null) {
      filteredPayload[key] = removeObjectDeepDynamic(payload[key]);
    } else if (payload[key] !== '' && payload[key] !== null && payload[key].length !== 0 && payload[key] !== undefined) {
      filteredPayload[key] = payload[key]
    }
  }
  return filteredPayload
}