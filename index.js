//Change seat value
function handleSeatChange(check, value) {
    let firstSeatNum = stringToInt(value);
    if (check == true) {
        firstSeatNum++;
    }
    else {
        if (firstSeatNum != 0)
            firstSeatNum--;
    }
    document.getElementById(value).value = firstSeatNum;
    if (value == 'first-seat') {
        innerTextUpdate('display-first', firstSeatNum);
    }
    else {
        innerTextUpdate('display-economy', firstSeatNum);
    }
    calculation();
}


//Calculation Fare
function calculation() {
    const subTotal = (stringToInt('first-seat') * 150) + (stringToInt('economy-seat') * 100);
    innerTextUpdate('sub-total', subTotal);
    innerTextUpdate('display-sub-total', subTotal);
    const vat = subTotal * .1;
    innerTextUpdate('vat', vat);
    innerTextUpdate('display-vat', vat);
    const total = subTotal + vat;
    innerTextUpdate('total', total);
    innerTextUpdate('display-total', total);

}


//innerText Value Assign
function innerTextUpdate(id, value) {
    document.getElementById(id).innerText = value;
};


// String to Integer 
function stringToInt(id) {
    const stringNum = document.getElementById(id).value;
    if (stringNum == "") {
        return 0;
    }
    else {
        return parseInt(stringNum);
    }
}

function overlay() {
        document.getElementById('ticket-info').style.display = 'grid';
        document.getElementById('main').style.visibility = 'hidden';
}
