const assertEqual = function(actual, expected) {
    if (actual == expected) {
        console.log("Assertion passed" + actual + "==" + expected)
    } else {
        console.log("Nope!")
    }
};



const head =  function(array) {
    return array[0]
}

const args = process.argv.slice(2);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");