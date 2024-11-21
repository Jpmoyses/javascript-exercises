const palindromes = function (words = '') {
    words = words.replaceAll(' ', '').toLowerCase();
    words = words.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    let wordArray = words.split('');
    let wordArrayReverse = [...wordArray];
    wordArrayReverse.reverse();
    console.log(wordArray, wordArrayReverse);
    for(let i = 0; i < wordArray.length; i++){
        if (wordArray[i] !== wordArrayReverse[i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
