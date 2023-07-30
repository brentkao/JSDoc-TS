/**
 * @typedef {string} name
 * @typedef {number} level
 * @typedef {string} point
 * 
 * @typedef {{
 * name: string,
 * level: number,
 * point?: string,
 * }} insertData
 * 
 */



/**
 * 創建使用者帳號
 * @param {string} create_uid 
 * @param {{
 * name: name,
 * level: level,
 * point?: point,
 * }} insertData 
 * @param {insertData[]} info
 */
function insert(create_uid, insertData, info) {
    let {
        name,
        level,
        point,
    } = insertData;

}


exports.insert= insert;