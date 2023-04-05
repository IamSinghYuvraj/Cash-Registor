const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#Check-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes")

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {      
            showMessage("The cash provided should be atleast equal to the bill amount.")
        }
    } else {
       showMessage ("Invalid Bill Amount.");
    }
});

function calculateChange(amountToBeReturned) {
    // go over all the avaialble notes 
    for (let i = 0; i < availableNotes.length; i++) {
        // no of notes need for denomination
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        // amount left after calculating the number of notes needed
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        //updating no of notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;
    }
};
function hideMessage() { 
    message.style.display = "none";
};

function showMessage(msg) {
    message.style.display = "Block";
    message.innerText = msg;
    
};