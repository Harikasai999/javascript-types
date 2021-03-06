// Write a function called isDivisibleBy3 which returns `true` if a number is
// divisible by 3, and `false` otherwise.
var isDivisibleBy3 = function (val) {
	 return val % 3 === 0;
};
console.log(isDivisibleBy3(30));//true

console.log(isDivisibleBy3(16));//false
// Write a function that converts a Celsius temperature to Fahrenheit,
// and vice-versa. To convert from Celsius to Fahrenheit, you multiply
// the celsius value by 9 and then divide by 5. Then you add 32. To
// convert the other way, you subtract 32, and then multiply by
// 5. Finally, you divide by 9. The division operator in JavaScript is
// `/`.
var celsToFahr = function (f) {
	return (9/5) * f + 32;
};
console.log(celsToFahr(15));//59

var fahrToCels = function (c) {
	  return (c - 32) * (5/9);
};
console.log(fahrToCels(35));//1.6666666666666667

// Write a function called `randUpTo` that accepts a number and returns a random
// whole number between 0 and that number. For example:
//
//     randUpTo(10);
//     //=> 5
//
//     randUpTo(10);
//     //=> 9
//
//     randUpTo(1000);
//     //=> 561
//
//     randUpTo(1000);
//     //=> 236
var randUpTo = function (n) {
	return Math.floor(Math.random() * n);
};
console.log(randUpTo(1000));//"712","456","25"


// Write a function called `randBetween` that accepts two numbers representing a
// range and returns a random whole number between those two numbers.
var randBetween = function (a,b) {
	 return Math.floor(Math.random() * (b - a) + a);
};
console.log(randBetween(1000,9999));//"1236","5698","5478"


// The standard card suits are clubs, diamonds, hearts and spades. Write a
// function called isSuit that accepts a string and returns true if the input
// string is a suit, and false otherwise. Consider making a more robust function
// that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
// "hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
// string methods to achieve this.
//
//     isSuit("hearts");
//     //=> true
//
//     isSuit("HEARTS");
//     //=> true
//
//     isSuit("coins");
//     //=> false
var isSuit = function (s) {
	var lowerCaseSuit = s.toLowerCase();
    return lowerCaseSuit === "hearts" ||
        lowerCaseSuit === "spades" ||
        lowerCaseSuit === "clubs" ||
        lowerCaseSuit === "diamonds";
};
console.log(isSuit("COINS"));//false
console.log(isSuit("CLUBS"));//ture
console.log(isSuit("clubs"));//true

// The valid ranks for a card are two, three, four, five, six, seven, eight,
// nine, ten, jack, queen, king and ace. Write a function called `isRank` that
// accepts a string and returns true if it is a card rank.
//
//     isRank("jack");
//     //=> true
//
//     isRank("Queen");
//     //=> true
//
//     isRank("one");
//     //=> false
var isRank = function (r) {
	 var lowerCaseRank = r.toLowerCase();
    return lowerCaseRank === "two" ||
        lowerCaseRank === "three" ||
        lowerCaseRank === "four" ||
        lowerCaseRank === "five" ||
        lowerCaseRank === "six" ||
        lowerCaseRank === "seven" ||
        lowerCaseRank === "eight" ||
        lowerCaseRank === "nine" ||
        lowerCaseRank === "ten" ||
        lowerCaseRank === "jack" ||
        lowerCaseRank === "queen" ||
        lowerCaseRank === "king" ||
        lowerCaseRank === "ace";
};

console.log(isRank("KING"));//true
console.log(isRank("king"));//true
console.log(isRank("one"));//false
// Using the previous two functions, write a function called isCard that accepts
// two arguments, a rank and a suit, and returns true if they are valid for a card,
// and false otherwise.
var isCard = function (r,s) {
	 return isRank(r) && isSuit(s);
};
console.log(isCard("one","clubs"));//false
console.log(isCard("king","clubs"));//true
console.log(isCard("king","coins"));//false
// Write a function called `isCapitalized` that accepts a string and returns
// `true` if the first letter is a capital letter. How can you determine that?
// Remember that you can use strings in comparisons in the same way that you can
// use numbers, and the ordering is alphabetical (with capital letters having lower
// values than their lower-case counterparts).
var isCapitalized = function (str) {
	 return "A" <= str.charAt(0) && str.charAt(0) <= "Z";
};
console.log(isCapitalized("CAPITALIZED"));//TRUE
console.log(isCapitalized("capitalized"));//FALSE

// Write a function that accepts a string representation of an HTML element (it
// can't have nested HTML elements) and returns the string contained inside. For
// example:
//
//     getHTMLText("<p>this is some text in a paragraph</p>");
//     //=> this is some text
//
//     getHTMLText("<li>this is a list item</li>");
//     //=> this is a list item
var getHTMLText = function (elt) {
	return elt.substring(elt.indexOf(">")+1, elt.lastIndexOf("</"));
};
console.log(getHTMLText("<li>this is a list item</li>"));//this is a list item

// Write a function that determines if a string represents an HTML element. This
// means it has to start with an opening HTML tag and end with a closing HTML tag.
//
//     isHTMLElement("<p>this is a paragraph</p>");
//     //=> true
//
//     isHTMLElement("this is a tweet!");
//     //=> false
//
//     isHTMLElement("<p>this is NOT an paragraph</div>");
//     //=> false
//
//     isHTMLElement("<li>this is an HTML list element</li>");
//     //=> true
//
// It may help in this case to look up the `lastIndexOf` method on the string
// objects.
var isHTMLElement = function (str) {
	 var openTag = str.substring(str.indexOf("<") + 1, str.indexOf(">"));
    var closeTag = str.substring(str.lastIndexOf("</") + 2, str.lastIndexOf(">"));
    return str.charAt(0) === "<" && str.charAt(str.length - 1) === ">" && openTag === closeTag;
};
console.log(isHTMLElement("<p>this is NOT an paragraph</div>"));//FALSE
console.log(isHTMLElement("<p>this is NOT an paragraph</p>"));//TRUE
