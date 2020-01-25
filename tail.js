const assertEqual = function(actual, expected) {
    if (actual == expected) {
        console.log("Assertion passed" + actual + "==" + expected)
    } else {
        console.log("Nope!")
    }
};



const tail =  function(array) {
    return array.slice(1)
}

const args = process.argv.slice(2);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!