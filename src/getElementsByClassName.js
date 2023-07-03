// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var result = [];
  //use classList to search for class name
  //childNode to search every element w/in element
  //return array of elements with class name
  var innerFunction = function(currentElement) {
    if (currentElement.classList && currentElement.classList.contains(className)) {
      result.push(currentElement);
    }
    if (currentElement.hasChildNodes()) {
      var children = currentElement.childNodes;
      for (var i = 0; i < children.length; i++) {
        innerFunction(children[i]);
      }
    }
  };
  innerFunction(document.body);
  return result;
};
