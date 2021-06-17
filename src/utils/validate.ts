/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
// 判断路径是不是带协议的外链
export const isExternal = (path: string): boolean => {
  return /^(https?:|mailto:|tel:)/.test(path)
}
/**
 * @param {string} str
 * @returns {Boolean}
 */
// export function validUsername(str) {
//   const valid_map = ['admin', 'editor'];
//   return valid_map.indexOf(str.trim()) >= 0;
// }
