// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'boolean') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number') {
    return obj.toString(10);
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      return '[' + obj.map((item, i) => stringifyJSON(item)).join(',') + ']';
    }
  } else if (typeof obj === 'function') {
    // do nothing
  } else if (obj === undefined) {
    // do nothing
  } else if (Object(obj) === obj) {
    const result = [];
    for (let key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      } else {
        result.push(`${stringifyJSON(key)}:${stringifyJSON(obj[key])}`);
      }
    }
    return '{' + result.join(',') + '}';
  }
};
