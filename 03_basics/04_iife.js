// Immediately Invoked Function Expressions (IIFE)

// Global scope se problem hoti h... kai bar so us global scope k polution ko hatane k liye hmne IIFE ko use kiya

// named IIFE
(function chai() {
    console.log("DB Connected");
})();   // need to add semicolor(;) end of the function for completing the IIFE

// simple/unnamed IIFE
(() => {
    console.log("DB connected 2");
})();

// simple/unnamed IIFE with parameters
((userName) => {
    console.log(`${userName} your DB is connected!`);
})("Mr SM");