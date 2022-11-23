function eachWordInUpper(str) {
    const wordArray = str.split(' ');
    const resultWordArray = [];

    for(let i = 0; i < wordArray.lenght; i++) {
        let word = (wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1))
        resultWordArray.push(word);
    }
    return resultWordArray.join('-')
}

console.log(eachWordInUpper('hello to you'));