// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual == expected) {
        console.log("Assertion passed" + actual + "==" + expected)
    } else {
        console.log("Nope!")
    }
};

const args = process.argv.slice(2);
assertEqual(args[0], args[1])
