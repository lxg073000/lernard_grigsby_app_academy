// let cat = {
//   purr: function(){
//     console.log('purr');
//   },
//   morePurr: () => {
//     for(let x = 0; x < cat.name.length; x++){
//       console.log(`${cat.name}'kitty..`);cat.purr();
//     }
//   },
//   name:'Scribble'
// };

// cat.purr();
// cat.morePurr();


// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block'; //var x cannot be definied twice.  only reassigned
//     console.log(x);
//   }
//   console.log(x);
// }

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping2();


// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block'; // ERR, x is already assigned as type constant and can't be changed even in a block scope
//     console.log(x);
//   }
//   console.log(x);
// }

// mysteryScoping3();

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

// mysteryScoping4();

// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again'; // Declared twice in the same scope
//   console.log(x);
// }


function madLib(verb, adjective, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.`);
}

madLib('make', 'best', 'guac');
// "We shall MAKE the BEST GUAC."


function isSubstring(string1, string2) {
  console.log(string1.includes(string2));
}

isSubstring('he', 'hello');

isSubstring("time to program", "time");
// true

isSubstring("Jump for joy", "joys");
// false

function fizzBuzz(array){
  array.forEach(function(el){
    if(el % 3 === 0 ^ el % 5 === 0){
      console.log(el);
    }
  });
}

fizzBuzz([3,5,15,9,30]);


function isPrime(num){
  let i=2;
  while (i < num){ 
    if (num % i === 0){ 
      return console.log(false);
    }else{
      i++;}
  } return console.log(true);
}

isPrime(2);
// true
isPrime(10);
// false
isPrime(15485863);
// true
isPrime(3548563);
// false

const is_Prime = (num) => {
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    } else {
      i++;
    }
  } return true;
};

function sumOfNPrimes(num){
  const primes = [];
  while(primes.length < num){
    var i = 2;
    if (is_Prime(i) == true ){
      primes.push(i);
    }else{
      i++;}
  }
  return primes;
}

// sumOfNPrimes(0);
// // 0
sumOfNPrimes(1);
// 2
sumOfNPrimes(4);
// 17