this.x = 10;
function t() {
    console.log(this);
    
    
    this.x = 100;
}

console.log(this);// ==> window
console.log(this.x);// ==> 10
console.log(t.x);// ==> undefined
console.log(t());// ==> undefined
console.log(new t());// ==> {x:100}