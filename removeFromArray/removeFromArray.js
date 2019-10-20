const removeFromArray = function(arr,...num) {

    let newArray = arr;
    
    for (let i = 0; i< num.length; i++) {
        
        for(let a = 0; a < newArray.length; a++){if (num[i] === newArray[a]){
        newArray.splice(a,1);
    }}

    
    }

    return newArray;
}

module.exports = removeFromArray

