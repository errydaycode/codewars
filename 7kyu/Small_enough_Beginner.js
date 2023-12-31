// You will be given an array and a limit value.
//     You must check that all values in the array are below or equal to the limit value.
//     If they are, return true. Else, return false.
//
//     You can assume all values in the array are numbers.


// first solution
function smallEnough(a, limit){
    let arr = a.filter(el => el <= limit)
    return arr.length === a.length ? true : false
}


// refactored solution

const smallEnough =(a,l) => a.filter((v) =>v>l).length > 0 ? false : true