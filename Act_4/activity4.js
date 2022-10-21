


let returnLarger = (arr, num) =>{
    return arr.reduce((acc,curr)=>{
        if (curr < num){
            return acc.concat(curr) //Concatenate the acc with arr
        }else{
            return acc
        }
    }, []) //Initialize the accumulator with an empty array
}


console.log(returnLarger([41, 15, 14, 33, 20], 19));