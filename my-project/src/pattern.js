// /...
const n = 5
let i;

// up

for (i = 1; i < n; i++) {
    let x = ""

    // start
    for (let j = 0; j < i; j++) {
        x += "*"
    }
    
    // mid

    for(let j=0;j<2*(n-i);j++){
        x+= "-"
    }

    // end

    for(let j=0; j<i;j++){
        x+= "*"
    }

    console.log(x);
}

// down

for (i = n; i > 0; i--) {

    let x = ""

    // start
    for (let j = 0; j < i; j++) {
        x += "*"
    }

    // mid

    for(let j=0;j<2*(n-i);j++){
        x+= "-"
    }

    // end
    
    for(let j=0; j<i;j++){
        x+= "*"
    }

    console.log(x);
}