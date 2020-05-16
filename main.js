// VARIABLES ----------------------------------------------

    var input = getInput();

    //can be modified through gui in later iterations
    var price20 =  7.99;
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

    //onclick() action to process input 
    function toggleShowContent() {
        var content = document.getElementById("showContent");
        if (content.style.display === "none") {
        content.style.display = "block";
        } else {
        content.style.display = "none";
        }
        displayInput();
        calcAll();
        showOrders();
        math();
    }
    
    //reads input and displays it
    function displayInput() {
        var input;
        input = getInput();
        document.getElementById("inputHere").innerHTML = input;
    }

    //reads input -> can be integrated into ToggleShowContent()
    function getInput() {
        var input = document.getElementById("input").value;
        return input;
    }

    //subfunction to show orders -> can be integrated into ToggleShowContent()
    function showOrders() {
        var orderList = document.getElementById("orderList");
        orderList.style.display = "block";
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

//CALCULATING --------------------------------------------------

    //just for testing 
    function math() {
        var math = getInput() * 2;
        document.getElementById("math").innerHTML = math;
    }

    function calcAll() {
        calcExact();
        calcEasiest();
        calcCheapest();
        calcSauciest();
        
        var orders = [
            {
                exact
            },
            {
                easiest
            },
            {
                cheapest
            },
            {
                sauciest
            }
        ]
        return orders;
    }

    function calcExact() {
        var exact = {
            twens: 0,
            nines: 0,
            sixes: 0,
            nuggcount: 0,
            dipcount: 0,
            price: 0,
        };

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
        this.dipcount = this.sixes * dips.dip6 + this.nines * dips.dip9 + this.twens * dips.dip20;
        this.price = this.sixes * prices.price6 + this.nines * prices.price9 + this.twens * prices.price20;	
        
        return exact;
    }

    function calcEasiest() {
        var easiest = {
            twens: 0,
            nines: 0,
            sixes: 0,
            nuggcount: 0,
            dipcount: 0,
            price: 0,
        };

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
                if (input % 20 <= 6) {
                    this.sixes ++;
                }
                else if (input % 20 <= 9) {
                    this.nines ++;
                }
            }
        }
        this.nuggcount = this.sixes * 6 + this.nines * 9 + this.twens * 20;
        this.dipcount = this.sixes * dips.dip6 + this.nines * dips.dip9 + this.twens * dips.dip20;
        this.price = this.sixes * prices.price6 + this.nines * prices.price9 + this.twens * prices.price20;	
        
        return easiest;
    }

    function calcCheapest() {

        var cheapest = {
            twens: 0,
            nines: 0,
            sixes: 0,
            nuggcount: 0,
            dipcount: 0,
            price: 0,
        };

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
        else if (input > 9 && input <= 20) {
            this.sixes = 0;
            this.nines = 0;
            this.twens = 1;
        }
        
        this.twens = input / 20; 
        var r20 = input % 20;
        this.nines = r20 / 9;
        var r9 = input % 9;
        if (r9 <= 6) {
            this.sixes ++;
        }
        else {
            this.nines ++;
        }

        this.nuggcount = this.sixes * 6 + this.nines * 9 + this.twens * 20;
        this.dipcount = this.sixes * dips.dip6 + this.nines * dips.dip9 + this.twens * dips.dip20;
        this.price = this.sixes * prices.price6 + this.nines * prices.price9 + this.twens * prices.price20;	
        
        return cheapest;
    }

    function calcSauciest() {
        var sauciest = {
            twens: 0,
            nines: 0,
            sixes: 0,
            nuggcount: 0,
            dipcount: 0,
            price: 0,
        };
        this.input = input;
        var r9 = input % 9;
        this.nines = input / 9;
        this.sixes = 0;
        this.twens = 0;
        if (r9 >= 7) {
            this.nines++;
        } else {
            this.sixes = 1;
        }

        this.nuggcount = this.sixes * 6 + this.nines * 9 + this.twens * 20;
        this.dipcount = this.sixes * dips.dip6 + this.nines * dips.dip9 + this.twens * dips.dip20;
        this.price = this.sixes * prices.price6 + this.nines * prices.price9 + this.twens * prices.price20;	
        
        return sauciest;
    }