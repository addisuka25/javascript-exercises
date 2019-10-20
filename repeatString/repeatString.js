const repeatString = function(word,numOfTimes) {

    let copyWord = "";
    for (i = 0; i < numOfTimes; i++) {
        copyWord = copyWord + word;
    }
    if (numOfTimes < 0 ){ return "ERROR";} else {return  copyWord; }
    
}

module.exports = repeatString


