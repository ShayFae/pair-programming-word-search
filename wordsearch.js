const { transpose } = require('./transpose');
const wordSearch = (letters, word) => { 
    const crazy = (matrix) => {
        const join = matrix.map(ls => ls.join(''));
        for (const h of join) {
            if (h.includes(word)) return true;
        };
    }
    let callback1 = crazy(letters); 
    if (callback1) {
        return callback1;
    }
    let callback2 = crazy(transpose(letters));
    if (callback2) {
        return callback2;
    }
    return false;
 };
module.exports = wordSearch;