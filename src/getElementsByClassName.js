// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  const result = [];

  const checkNodeContainsClass = (node) => {
    if (node.classList !== undefined) {
      return node.classList.contains(className);
    } else {
      return false;
    }
  };

  const countClassElements = (node) => {
    if (checkNodeContainsClass(node) === true) {
      result.push(node);
    }

    for (let i = 0; i < node.childNodes.length; i++) {
      countClassElements(node.childNodes[i]);
    }
  };

  countClassElements(document.body);

  return result;
};

// Q: How many elements are of class "className"?
// A: Let me check with document.body
// - document.body: let me check with the children
// -- children: let me check with the grandchildren
// --- grandchildren: return 3
// -- children: return 3 + 4
// - parent: return 3 + 4 + 1
// A: we have a total of 8!