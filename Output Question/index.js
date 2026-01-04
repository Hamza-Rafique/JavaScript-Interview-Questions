console.log(typeof null);


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

//need explation 

function outer() {
  let x = 10;
  return function inner() {
    return x++;
  };
}

const fn = outer();
console.log(fn());
console.log(fn());


console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");


//output 

const obj = {
  name: "Hamza",
  getName() {
    return this.name;
  }
};

const fn = obj.getName;
console.log(fn(), obj.getName);
