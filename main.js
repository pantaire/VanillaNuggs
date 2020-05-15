// VARIABLES ----------------------------------------------

var easy = {
    twens: 0,
    nines: 0,
    sixes: 0,
    nuggcount: 0,
    sauces: 0,
    price: 0,
};

var cheap = {
    twens: 0,
    nines: 0,
    sixes: 0,
    nuggcount: 0,
    sauces: 0,
    price: 0,
};

var saucy = {
    twens: 0,
    nines: 0,
    sixes: 0,
    nuggcount: 0,
    sauces: 0,
    price: 0,
};

//can be modified through gui in later iterations
var prices = {
    price20: 7.99,
    price9: 3.99,
    price6: 2.99
};

//can be modified through gui in later iterations
var dips = {
    dip6: 1,
    dip9: 2,
    dip20: 3
};

var orders = [
    {
        exact
    },
    {
        easy
    },
    {
        cheap
    },
    {
        saucy
    }
]

//CALCULATING --------------------------------------------------

//just for testing 
function math() {
    var math = getInput() * 2;
    document.getElementById("math").innerHTML = math;
}

function calcExact(input) {

    var input = getInput();

    //initialisierung mit s/n/t=0 nötig?
    if (input <= 6) {
        exactsixes = 1;
        exactnines = 0;
        exacttwens = 0;
    }
    else if (input > 6 && input <= 9) {
        exactsixes = 0;
        exactnines = 1;
        exacttwens = 0;
    }
    else if (input > 9 && input <= 12) {
        exactsixes = 2;
        exactnines = 0;
        exacttwens = 0;
    }
    else if (input > 12 && input <= 20) {
        exactsixes = 0;
        exactnines = 0;
        exacttwens = 1;
    }
    else {
        if (input % 6 == 0 || input % 6 >= 4 ) {
            exactsixes = input / 6;
        }
        else if (input % 9 == 0 || input % 9 >= 6) {
            exactnines = input / 9;
        }
        else if (input % 20 == 0 || input % 20 >= 14) {
            exacttwens = input / 20;
        }
    }
    
    exactnuggcount = exactsixes * 6 + exactnines * 9 + exacttwens * 20;
    exactdipcount = exactsixes * dip6 + exactnines * dip9 + exacttwens * dip20;
    exactprice = exactsixes * price6 + exactnines * price9 + exacttwens * price20;
    
    return var exact = {
        twens: exacttwens,
        nines: exactnines,
        sixes: exactsixes,
        nuggcount: exactnuggcount,
        sauces: exactdipcount,
        price: exactprice,
    };
}


//DISPLAYING --------------------------------------------------

//onclick() action to process input 
function toggleShowContent() {
  var content = document.getElementById("showContent");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
  displayInput();
  showOrders();
  math();
}

//reads input -> can be integrated into ToggleShowContent()
function getInput() {
    var i = document.getElementById("input").value;
    return i;
}

function getAllOrders() {
    math();
    showOrders();
}

//subfunction to show orders -> can be integrated into ToggleShowContent()
function showOrders() {
    var orderList = document.getElementById("orderList");
    orderList.style.display = "block";
}

//reads input and displays it
function displayInput() {
    var input;
    input = getInput();
    document.getElementById("inputHere").innerHTML = input;
}

//shows disclaimer after clicking corr. button; can be modified for showing graphs later
function toggleShowDisclaimer() {
    var disclaimer = document.getElementById("disclaimer");
    if (disclaimer.style.display === "none") {
      disclaimer.style.display = "block";
    } else {
      disclaimer.style.display = "none";
    }
}
