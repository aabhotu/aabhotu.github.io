function findChar(strr) {
    let arr = strr.split('');
    arr.forEach(i =>{
        arr[i] = arr[i] ? arr[i] + 1: 1;
    })
    for(let index in strr) {
        if(arr[strr[index]] == 1) {
            return index;
        }
    }
}