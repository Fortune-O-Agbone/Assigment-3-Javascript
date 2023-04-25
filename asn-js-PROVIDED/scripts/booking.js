/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay;
var dayCounter;
var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");
var clearDays = document.getElementById("clear-button");
var calculatedCost = document.getElementById("calculated-cost");
var weeklyCost = 0;

var days = document.querySelectorAll(".day-selector li");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// monday.addEventListener("click", changeBackgroundColor);
// tuesday.addEventListener("click", changeBackgroundColor);
// wednesday.addEventListener("click", changeBackgroundColor);
// thursday.addEventListener("click", changeBackgroundColor);


for (var i = 0; i < days.length; i++) {
    days[i].addEventListener("click", clickDayButton)

}

function clickDayButton(){
    this.classList.toggle("clicked");
    dayCounter = daySelectorClicked();
}

function daySelectorClicked(){
    let count = 0;
    for (var i = 0; i < days.length; i++) {
        if(days[i].classList.contains("clicked")){
            count ++;
        }
    }
    return count;
}



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearDays.addEventListener("click", clearAllDays)
function clearAllDays() {
    for (var i = 0; i < days.length; i++) {
        days[i].classList.remove("clicked");
    }

    dayCounter = 0;
    costPerDay = 0;
    calculateCost.innerText = "0";
};





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDay.addEventListener("click", clickedHalfDay);
function clickedHalfDay() {
    fullDay.classList.remove("clicked");
    halfDay.classList.add("clicked");
    costPerDay = 20;
    calculateCost();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


fullDay.addEventListener("click", clickedFullDay);
function clickedFullDay() {
    costPerDay =  35;
    fullDay.classList.add("clicked");
    halfDay.classList.remove("clicked");

    calculateCost();
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculateCost() {
    let cost = costPerDay * dayCounter;
    calculatedCost.innerText = cost;
}
