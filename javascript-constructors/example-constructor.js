function ExampleConstructor() {}
console.log('value of prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor:', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log('newExampleConstructor:', newExampleConstructor);
var checkInstance = newExampleConstructor instanceof ExampleConstructor;
console.log('check prototype property:', checkInstance);
