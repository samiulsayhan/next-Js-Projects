// /...
const n = 5
let i;

// up

for (i = 1; i < n; i++) {
    let x = ""
    for (let j = 0; j < i; j++) {
        x += "*"
    }
    // for(let j=n;j>0;j--){
    //     x +="1"
    // }


    for (let j = 1; j <= 2 * (n - i); j++) {
                x += " ";
        }

    console.log(x);
}

// down

for (i = n; i > 0; i--) {

    let x = ""
    for (let j = 0; j < i; j++) {
        x += "*"
    }
    console.log(x);
}