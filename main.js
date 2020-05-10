let orders = [
    {
        name: "Genaueste Anzahl",
        abbr: "precise",
        twens: "1",
        nines: "3",
        sixes: "4"
    },
    {
        name: "Einfache Bestellung",
        abbr: "easy",
        twens: "1",
        nines: "3",
        sixes: "4"
    },
    {
        name: "Bester Preis",
        abbr: "cheap",
        twens: "1",
        nines: "3",
        sixes: "4"
    },
    {
        name: "Meiste Dips",
        abbr: "saucy",
        twens: "1",
        nines: "3",
        sixes: "4"
    }
]

function toggleShowContent() {
  var content = document.getElementById("showContent");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
  displayInput();
  showOrders();
}

function toggleShowDisclaimer() {
    var disclaimer = document.getElementById("disclaimer");
    if (disclaimer.style.display === "none") {
      disclaimer.style.display = "block";
    } else {
      disclaimer.style.display = "none";
    }
}

function math() {
    var math = getInput() * 2;
    document.getElementById("math").innerHTML = math;
}

function getAllOrders() {
    math();
    showOrders();
}

function showOrders() {
    var orderList = document.getElementById("orderList");
    orderList.style.display = "block";
}

function displayInput() {
    var input;
    input = getInput();
    document.getElementById("inputHere").innerHTML = input;
}


function getInput() {
    var i = document.getElementById("input").value;
    return i;
}