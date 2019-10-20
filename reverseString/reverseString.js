const reverseString = function(word) {
 
    let copyWordsBackwards = "";

    for(i = word.length - 1; i >= 0 ; i--){
        
       copyWordsBackwards = copyWordsBackwards + word[i] ;
    
    }

    return copyWordsBackwards;
}

module.exports = reverseString


