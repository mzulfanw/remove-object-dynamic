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