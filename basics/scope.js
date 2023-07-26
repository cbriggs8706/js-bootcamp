// Lexical Scope (Static Scope)
// Global Scope - Defined otuside of all code blocks
// Local Scope - Defined inside a codde block

// In a scope you can access variables defined in that scope, or in any parent

// Global Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (var Four)
    // Local Scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)