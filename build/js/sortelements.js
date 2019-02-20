'use strict'

function setPrice(n) {
  var str = document.getElementsByClassName('price__number');
  var stringValue = str.toString();
  str = stringValue.replace(/\s+/g,'');
  return str;
}

function sort() {
  var nodeList = document.querySelectorAll('.card__sort');
  var itemsArray = [];
  itemsArray.sort(function compareNumeric(nodeA, nodeB) {
      var numberA = setPrice(nodeA.querySelector('.price__number').textContent);
      var numberB = setPrice(nodeB.querySelector('.price__number').textContent);

  return numberA - numberB;
});
}
