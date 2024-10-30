let ponta1 = 3
let ponta2 = 30
let ponta3 = 5

if (ponta1 == ponta2 & ponta3 == ponta2 & ponta3 == ponta1 ) {
    console.log ("Este triangulo é equilátero.")
} else if ( ponta2 == ponta3 | ponta3 == ponta1 | ponta1 == ponta2) {
    console.log ("Este triangulo é isósceles.")
} else {
    console.log ("Este triangulo é escaleno.")
}