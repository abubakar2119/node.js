//immediately invoked function expression (IIFE)

(function chaiorcode() {
    // Named IIFE
    console.log("IIFE")
})();

( (name) => {
    console.log(`IIFE arrow function ${name}`)
})("abubakar")