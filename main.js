// VARIABLES ----------------------------------------------

var exact = {
    twens: 0,
    nines: 0,
    sixes: 0,
    nuggcount: 0,
    sauces: 0,
    price: 0,
};

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

var i;
function calcExact(i) {

var i = getInput();

    //initialisierung mit s/n/t=0 nötig?
    if (input <= 6) {
        this.sixes = 1;
        this.nines = 0;
        this.twens = 0;
    }
    else if (input > 6 && input <= 9) {
        this.sixes = 0;
        this.nines = 1;
        this.twens = 0;
    }
    else if (input > 9 && input <= 12) {
        this.sixes = 2;
        this.nines = 0;
        this.twens = 0;
    }
    else if (input > 12 && input <= 20) {
        this.sixes = 0;
        this.nines = 0;
        this.twens = 1;
    }
    else {
        if (input % 6 == 0 || input % 6 >= 4 ) {
            this.sixes = input / 6;
        }
        else if (input % 9 == 0 || input % 9 >= 6) {
            this.nines = input / 9;
        }
        else if (input % 20 == 0 || input % 20 >= 14) {
            this.twens = input / 20;
        }
    }
    
    this.nuggcount = this.sixes * 6 + this.nines * 9 + this.twens * 20;
    this.dipcount = this.sixes * dip6 + this.nines * dip9 + this.twens * dip20;
    this.price = this.sixes * price6 + this.nines * price9 + this.twens * price20;	
return this;
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