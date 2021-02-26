console.log("Hello from the JavaScript console!");

$.ajax({
  type: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather' +
  	'?q=new%20york,US&appid=432e1bc294df00dc358d70871c2cc636',
  success(data) {
    console.log("We have your weather!")
    console.log(data);
  },
  error() {
    console.error("An error occurred.");
  },
});

console.log("THE AJAX has been dispatched.")
