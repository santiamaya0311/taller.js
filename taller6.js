let n = 1000000
let nota = (prompt("escriba su nota"))

if (nota < 3){
console.log(`el valor de su matricula es ${n}`);    

}

else if (nota >= 3 && nota <= 4){
console.log(`el valor de su matricula es ${(n)-(n*0.05)}`)
}

else if (nota > 4 && nota <= 5){
    console.log(`el valor de su matricula es ${n*0.5}`)
}