
/**
 * 創建使用者帳號
 * @param {string} create_uid 
 * @param {{
 * name: string,
 * level: number,
 * point?: string,
 * }} insertData 
 */
function insert(create_uid, insertData) {
    let {
        name,
        level,
        point,
    } = insertData;

}


exports.insert= insert;