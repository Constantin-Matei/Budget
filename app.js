// ! Budget Controller
var budgetController = (function() {
  // Some code
})();

// ! UI CONTROLLER
var UIController = (function() {
  var DOMstrings = {
    inputType: " .add__type",
    inputDescription: " .add__description",
    inputValue: " .add__value",
    inputBtn: " .add__btn"
  };

  return {
    getinput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be income or expenses
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// ! GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    // TODO 1. Get the filed input data
    var input = UICtrl.getinput();
    //console.log(input);

    // TODO 2. Add the item to the budget controller
    // TODO 3. Add the item to the UI
    // TODO 4. Calculate the budget
    // TODO 5. Display the budget on the UI
    //console.log("It works!");
  };

  return {
    init: function() {
      console.log("Application has started.");
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
