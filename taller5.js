
let n = (prompt("escribe un numero"))
let b = (prompt("escribe hasta que numero quieres multiplicar"))
let multi = 0
let suma = 0
    for (let i = 1; i <= b; i++) {
        multi=multi * i;
        console.log(`${n} x ${i} = ${n*i}`);
        suma = suma + (n*i)

    }
    console.log(suma);
    