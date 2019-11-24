// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  const checkNodeContainsClass = function(node, accumulator) {
    if (node.classList && node.classList.contains(className)) {
      accumulator.push(node);
    }

    const childCount = node.childNodes.length;
    if (childCount === 0) {
      return;
    } else {
      for (let i = 0; i < childCount; i++) {
        checkNodeContainsClass(node.childNodes[i], accumulator);
      }
    }
  };

  const result = [];
  checkNodeContainsClass(document.body, result);
  return result;
};