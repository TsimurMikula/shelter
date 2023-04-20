/**
 * Выполняет валидацию данных питомца
 * @param {*} pet 
 * @returns 
 */

function validPet(pet) {
    Object.keys(pet).forEach((key) => {
        if ((typeof (pet[key]) === 'string' && pet[key] === '') && Array.isArray(pet[key]) === false) {
        throw new Error (`Pet error. Field ${key} is invalid!`);
        }    
    })
    return true;
}

export { validPet };