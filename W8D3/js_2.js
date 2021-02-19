




const titleize = (array, callback) => {
  let titleNames = array.map(name => `Mx. ${name.toUpperCase} Jingleheimer Schmidt`);
  // let titleNames = array.map(x => `Mx. ${x.charAt(0).toUpperCase + x.substr(1).toLowercaseCase} Jingleheimer Schmidt`);

  callback(titleNames);
};

const printCallback = (names) => names.forEach(name => console.log(name));


titleize(["Mary", "Brian", "Leo"], printCallback);

function Elephant(name, height, tricks){
  name: name;
  height: height;
  tricks: [dancing, singing];
}

// // array of names and a callbackToPrint
// // iterate over each name with map and edit to include `Mx. ${word} Jingleheimer Schmidt`
// // pass resulting array to callbackPrintMethod

