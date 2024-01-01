//Clock shows h hours, m minutes and s seconds after midnight.
//
// Your task is to write a function which returns the time since midnight in milliseconds.
//
// Example:
// h = 0
// m = 1
// s = 1
//
// result = 61000

function past(h, m, s){
    return (((h*60)* 60000 ) + (m * 60000) + (s * 1000) )

}

const past2=(h, m, s)=>((h*60) + m) * 60000 + (s * 1000)