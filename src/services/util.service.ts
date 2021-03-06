
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function debounce(fn, delay) {
    var timeoutID = null
    return function () {
        clearTimeout(timeoutID)
        var args = arguments
        var that = this
        timeoutID = setTimeout(function () {
            fn.apply(that, args)
        }, delay)
    }
}

function loadFromStorage(key: string) {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) return
    return JSON.parse(itemStr)
}

function saveToStorage<valType>(key: string, val: valType) {
    localStorage.setItem(key, JSON.stringify(val))
}


export const utilService = {
    makeId,
    getRandomInt,
    debounce,
    loadFromStorage,
    saveToStorage
}