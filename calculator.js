function calculateTip() {
    const form = document.forms[0];
    const serviceRating = form['service-rating'].value;
    const numOfPeople = form['number-of-people'].value;
    const billAmount = form['bill-amount'].value;

    // check for the correct items here

    let tipPct = 0;
    switch(serviceRating) {
        case "2":
            tipPct = 0.05;
            break;
        case "3":
            tipPct = 0.10;
            break;
        case "4":
            tipPct = 0.15;
            break;
        case "5":
            tipPct = 0.20;
            break;
        default:
            tipPct = 0.00;
    }
    const tip = {
        tipAmount: tipPct * billAmount / numOfPeople, 
        each: numOfPeople == 1 
    };
    console.log(numOfPeople);
    updateTipMessage(tip);
}

function updateTipMessage(tipObject) {
    resetCalculator();
    const tipElement = document.getElementById("tip-message");
    console.log(tipObject.each)
    if (tipObject.each)
        document.getElementById("tip-each").style.visibility = "hidden";
    let amountElement = document.getElementById("tip-amount");
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
    let amountText = formatter.format(tipObject.tipAmount);
    document.getElementById('tip-amount').innerHTML = amountText;
    tipElement.style.visibility = "visible";
}

function resetCalculator() {
    document.getElementById("tip-each").style.visibility = "visible";
    document.getElementById('tip-amount').innerHTML = '$0.00';
}