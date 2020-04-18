function Add(p1,p2,p3) {
    return p1 + p2 + p3;
}
var sum = add(1, 2, 3)
console.log("The result of adder is " + sum);

function Multiplier(p1,p2,p3) {
    return p1 * p2 * p3
}
var multiplier(2, 3, 4)
console.log("The result of multipler")

function isString(HOLA, HELLO, BONJOUR) {
  if (
      typeof HOLA === "string" &&
      typeof HELLO === "string" &&
      typeof BONJOUR === "string"
  ) {
      return "Yep. all strings";
}
else {
    return "No";
}
}
var stringCheckOne = isString("HOlA, HELLO, BONJOUR");
console.log(stringcheckone);
var stringCheckTwo = isString()

function vowelChecker(x) {
    var firstChar = x.toLowerCase().charAt(0);
    if (
        firstChar === "a" 
        firstChar === "e"
        firstChar === "i"
        firstChar === "o"
        firstChar === "u"
    )
}

