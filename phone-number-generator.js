/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
*/

const generate = (array) => {
    let phoneAsString = array.join('')
    return '('.concat(phoneAsString.slice(0,3), ') ', phoneAsString.slice(3,6), '-', phoneAsString.slice(6))
}

exports.generate = generate