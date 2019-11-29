// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  let accumulator = [];
  node = node || document.body;

  if (node.classList.contains(className)) {
    accumulator.push(node);
  }

  for (let i = 0; i < node.children.length; i++) {
    const childResults = getElementsByClassName(className, node.children[i]);
    accumulator = accumulator.concat(childResults);
  }

  return accumulator;
};