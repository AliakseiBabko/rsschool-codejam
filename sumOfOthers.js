function sumOfOthers(array) {
    let arrayLength = array.length;
        let resultArray = new Array(arrayLength).fill(0);
        for (let i=0; i<arrayLength; i++) {		
            for (let j=0; j<arrayLength; j++)
            if (i !== j) {
                resultArray[i] += array[j];
            }     
        }
        return resultArray;
    }