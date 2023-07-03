// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  //check typeof obj, array
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj);
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  }
  if (typeof obj === 'object') {
    var res = '';
    if (obj === null) {
      return 'null';
    } else {
      for (var key in obj) {
        if (key === 'undefined' || key === 'functions') {
          continue;
        }
        res += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        res += ',';
      }
      var res2 = res.slice(0, res.length - 1);
      var returned = '{' + res2 + '}';
      return returned;
    }
  }
  return null;
};