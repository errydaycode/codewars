//8 kyu
// Twice as old
// 61313290% of 5,47723,838 of 64,719petrosernivka
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Your function takes two arguments:
//
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son
// (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // Calculate the age difference
    const ageDifference = dadYearsOld - sonYearsOld;

    // Check if the father was ever twice as old as his son
    if (ageDifference >= sonYearsOld * 2) {
        return ageDifference - sonYearsOld * 2;
    } else {
        return sonYearsOld * 2 - ageDifference;
    }
}