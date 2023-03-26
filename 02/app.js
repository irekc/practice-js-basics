
/* rozwiązanie z pętlą for */
console.log('rozwiązanie z pętlą for');
const x = Number(prompt('Podaj liczbę od 1 do 10!'));

if(x >=1 && x <= 10) {
    for(let i=1; i<=9; i++ ) {
        const result = x * i;
        console.log(`${x} x ${i} = ${result}`)
    }
} else {
    console.error('podałeś błędne dane!')
}


/* rozwiązanie z pętlą while  */
console.log('rozwiązanie z pętlą while');
const a = Number(prompt('podaj a z przedziału 1-100'));
const n = Number(prompt('Podaj n z przedziału 0-10!'));

if(a >= 1 && a <= 100 && n >= 0 && n <= 10) {
    if(n === 0) {
        console.log('gdy n jest równe 0 to wynik jest zawsze równy 1')
    } else {
        let iter = 0;
        let result = 1;
        let info = '';
        
        while(iter < n) {
            
            result = result * a;
        
            if(iter > 0) {
                info = info + ' * ';
            }
        
            info = info + a;
        
            iter++;
        }
        info = info + ' = ' + result;
        console.log(result);
        console.log(info);
    }
} else  {
    alert('podałeś dane poza zakresem')
}
