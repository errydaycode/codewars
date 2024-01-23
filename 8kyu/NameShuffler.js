// Write a function that returns a string in which firstname is swapped with last name.
//
// Example(Input --> Output)
//
// "john McClane" --> "McClane john"

function nameShuffler(str) {
    let names = str.split(' ');
    let firstName = names[0];
    let lastName = names[1];

    return lastName + ' ' + firstName;
}