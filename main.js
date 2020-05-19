// VARIABLES ----------------------------------------------

//can be modified through gui in later iterations
var price20 = 7.99;
var price9 = 3.99;
var price6 = 2.99;

var dip20 = 3;
var dip9 = 2;
var dip6 = 1;

var prices = {
    price20,
    price9,
    price6
}

var dips = {
    dip20,
    dip9,
    dip6
}

//DISPLAYING --------------------------------------------------

//onclick() action to process inputAmount 
function showContent() {
    calcAll();
    math();
    displayInput();
    toggleContent();
}

function toggleContent() {
    var content = document.getElementById("showContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

//reads inputAmount and displays it
function displayInput() {
    inputAmount = getInput();
    document.getElementById("inputHere").innerHTML = inputAmount;
}

//reads inputAmount -> can be integrated into ToggleShowContent()
function getInput() {
    inputAmount = document.getElementById("input").value;
    return inputAmount;
}

//subfunction to show orders -> can be integrated into ToggleShowContent()
/*function showOrders() {
    var orderList = document.getElementById("orderList");
    orderList.style.display = "block";
}*/

//shows disclaimer after clicking corr. button; can be modified for showing graphs later
function toggleShowDisclaimer() {
    var disclaimer = document.getElementById("disclaimer");
    if (disclaimer.style.display === "none") {
        disclaimer.style.display = "block";
    } else {
        disclaimer.style.display = "none";
    }
}

//CALCULATING --------------------------------------------------

//just for testing 
function math() {
    var math = getInput() * 2;
    document.getElementById("math").innerHTML = math;
}

function calcAll() {
    var inputAmount = getInput();
    calcExact(inputAmount);
    calcEasiest(inputAmount);
    calcCheapest(inputAmount);
    calcSauciest(inputAmount);
}

function calcExact(inputAmount) {
    var exact = {
        twens: 0,
        nines: 0,
        sixes: 0,
        nuggcount: 0,
        dipcount: 0,
        price: 0
    };

    if (inputAmount <= 6) {
        exact.sixes = 1;
        exact.nines = 0;
        exact.twens = 0;
    } else if (inputAmount > 6 && inputAmount <= 9) {
        exact.sixes = 0;
        exact.nines = 1;
        exact.twens = 0;
    } else if (inputAmount > 9 && inputAmount <= 12) {
        exact.sixes = 2;
        exact.nines = 0;
        exact.twens = 0;
    } else if (inputAmount > 12 && inputAmount <= 20) {
        exact.sixes = 0;
        exact.nines = 0;
        exact.twens = 1;
    } else {
        if (inputAmount % 6 == 0 || inputAmount % 6 >= 4) {
            exact.sixes = inputAmount / 6;
        } else if (inputAmount % 9 == 0 || inputAmount % 9 >= 6) {
            exact.nines = inputAmount / 9;
        } else if (inputAmount % 20 == 0 || inputAmount % 20 >= 14) {
            exact.twens = inputAmount / 20;
        }
    }

    exact.nuggcount = exact.sixes * 6 + exact.nines * 9 + exact.twens * 20;
    exact.dipcount = exact.sixes * dip6 + exact.nines * dip9 + exact.twens * dip20;
    exact.price = exact.sixes * price6 + exact.nines * price9 + exact.twens * price20;

    return exact;
}

function calcEasiest(inputAmount) {
    var easiest = {
        twens: 0,
        nines: 0,
        sixes: 0,
        nuggcount: 0,
        dipcount: 0,
        price: 0
    };

    if (inputAmount <= 6) {
        easiest.sixes = 1;
        easiest.nines = 0;
        easiest.twens = 0;
    } else if (inputAmount > 6 && inputAmount <= 9) {
        easiest.sixes = 0;
        easiest.nines = 1;
        easiest.twens = 0;
    } else if (inputAmount > 9 && inputAmount <= 12) {
        easiest.sixes = 2;
        easiest.nines = 0;
        easiest.twens = 0;
    } else if (inputAmount > 12 && inputAmount <= 20) {
        easiest.sixes = 0;
        easiest.nines = 0;
        easiest.twens = 1;
    } else {
        if (inputAmount % 6 == 0 || inputAmount % 6 >= 4) {
            easiest.sixes = inputAmount / 6;
        } else if (inputAmount % 9 == 0 || inputAmount % 9 >= 6) {
            easiest.nines = inputAmount / 9;
        } else if (inputAmount % 20 == 0 || inputAmount % 20 >= 14) {
            easiest.twens = inputAmount / 20;
            if (inputAmount % 20 <= 6) {
                easiest.sixes++;
            } else if (inputAmount % 20 <= 9) {
                easiest.nines++;
            }
        }
    }
    easiest.nuggcount = easiest.sixes * 6 + easiest.nines * 9 + easiest.twens * 20;
    easiest.dipcount = easiest.sixes * dip6 + easiest.nines * dip9 + easiest.twens * dip20;
    easiest.price = easiest.sixes * price6 + easiest.nines * price9 + easiest.twens * price20;
    return easiest;
}

function calcCheapest(inputAmount) {
    var cheapest = {
        twens: 0,
        nines: 0,
        sixes: 0,
        nuggcount: 0,
        dipcount: 0,
        price: 0
    };

    if (inputAmount <= 6) {
        cheapest.sixes = 1;
        cheapest.nines = 0;
        cheapest.twens = 0;
    } else if (inputAmount > 6 && inputAmount <= 9) {
        cheapest.sixes = 0;
        cheapest.nines = 1;
        cheapest.twens = 0;
    } else if (inputAmount > 9 && inputAmount <= 20) {
        cheapest.sixes = 0;
        cheapest.nines = 0;
        cheapest.twens = 1;
    }

    cheapest.twens = inputAmount / 20;
    var r20 = inputAmount % 20;
    cheapest.nines = r20 / 9;
    var r9 = inputAmount % 9;
    if (r9 <= 6) {
        cheapest.sixes++;
    } else {
        cheapest.nines++;
    }

    cheapest.nuggcount = cheapest.sixes * 6 + cheapest.nines * 9 + cheapest.twens * 20;
    cheapest.dipcount = cheapest.sixes * dip6 + cheapest.nines * dip9 + cheapest.twens * dip20;
    cheapest.price = cheapest.sixes * price6 + cheapest.nines * price9 + cheapest.twens * price20;

    return cheapest;
}

function calcSauciest(inputAmount) {
    var sauciest = {
        twens: 0,
        nines: 0,
        sixes: 0,
        nuggcount: 0,
        dipcount: 0,
        price: 0
    };

    sauciest.inputAmount = inputAmount;
    var r9 = inputAmount % 9;
    sauciest.nines = inputAmount / 9;
    sauciest.sixes = 0;
    sauciest.twens = 0;
    if (r9 >= 7) {
        sauciest.nines++;
    } else {
        sauciest.sixes = 1;
    }

    sauciest.nuggcount = sauciest.sixes * 6 + sauciest.nines * 9 + sauciest.twens * 20;
    sauciest.dipcount = sauciest.sixes * dip6 + sauciest.nines * dip9 + sauciest.twens * dip20;
    sauciest.price = sauciest.sixes * price6 + sauciest.nines * price9 + sauciest.twens * price20;

    return sauciest;
}