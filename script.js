var buttonReset = document.getElementById("button-reset");
var totalTip = document.getElementById("total-tip");
var totalPerson = document.getElementById("total-person");
var billField = document.getElementById("bill-field");
var numberPerson = document.getElementById("number-people");
var errorText = document.getElementById("error-text-people");
var errorTextBill = document.getElementById("error-text-bill");
var total, i;

var values = [5, 10, 15, 25, 50];
var value5 = document.getElementById("value5");
var value10 = document.getElementById("value10");
var value15 = document.getElementById("value15");
var value25 = document.getElementById("value25");
var value50 = document.getElementById("value50");
var valueCustom = document.getElementById("custom-input");
var percentageTip = 0;

buttonReset.addEventListener("click", reset);

function reset(){
    billField.value = "";
    numberPerson.value = "";
    totalTip.innerHTML = "$0.00";
    totalPerson.innerHTML = "$0.00";
    errorTextBill.innerHTML = "";
    errorText.innerHTML = "";
}
values.forEach(i => clickButtonTip(i));

function clickButtonTip(i){
    window["value" + i].addEventListener("click", function(){
        percentageTip = i;
        totalTip.innerHTML = "$" + (parseFloat(billField.value*(percentageTip/100))/parseInt(numberPerson.value)).toFixed(2);
        total = ((parseFloat(billField.value*(percentageTip/100)) / parseInt(numberPerson.value)) + (billField.value/numberPerson.value)).toFixed(2); 
        totalPerson.innerHTML = "$" + total;
        if(isNaN(total)){
            totalTip.innerHTML = "$0.00";
            totalPerson.innerHTML = "$0.00";
        }
    });
}

function clickCustomButton(){
        percentageTip = parseInt(valueCustom.value);
        totalTip.innerHTML = "$" + (parseFloat(billField.value*(percentageTip/100))/parseInt(numberPerson.value)).toFixed(2);
        total = ((parseFloat(billField.value*(percentageTip/100)) / parseInt(numberPerson.value)) + (billField.value/numberPerson.value)).toFixed(2); 
        totalPerson.innerHTML = "$" + total;
        if(isNaN(total)){
            totalTip.innerHTML = "$0.00";
            totalPerson.innerHTML = "$0.00";
        }
        if(isNaN(valueCustom.value)){
            valueCustom.value = "";
        }
}

valueCustom.addEventListener("click", clickCustomButton);
valueCustom.addEventListener("change", clickCustomButton);

billField.addEventListener("change", function calculateTip(){
    totalTip.innerHTML = "$" + (parseFloat(billField.value*(percentageTip/100))/parseInt(numberPerson.value)).toFixed(2);
    total = ((parseFloat(billField.value*(percentageTip/100)) / parseInt(numberPerson.value)) + (billField.value/numberPerson.value)).toFixed(2); 
    if(isNaN(total)){
        totalTip.innerHTML = "$0.00";
        totalPerson.innerHTML = "$0.00";
    }else{
        totalPerson.innerHTML = "$" + total;
    }
    if(isNaN(parseFloat(billField.value))){
        errorTextBill.innerHTML = "Field is not a number";
        totalTip.innerHTML = "$0.00";
        totalPerson.innerHTML = "$0.00";
    }else if(parseFloat(billField.value) < 0){
        errorTextBill.innerHTML = "Can't be negative";
        totalTip.innerHTML = "$0.00";
        totalPerson.innerHTML = "$0.00";
    }else{
        errorTextBill.innerHTML = "";
    }
});

numberPerson.addEventListener("change", function calculateTotal(){
    totalTip.innerHTML = "$" + (parseFloat(billField.value*(percentageTip/100))/parseInt(numberPerson.value)).toFixed(2);
    total = ((parseFloat(billField.value*(percentageTip/100)) / parseInt(numberPerson.value)) + (billField.value/numberPerson.value)).toFixed(2); 
    if(isNaN(total)){
        totalTip.innerHTML = "$0.00";
        totalPerson.innerHTML = "$0.00";
    }else{
        totalPerson.innerHTML = "$" + total;
    }
    if(parseInt(numberPerson.value) <= '0'){
        errorText.innerHTML = "Can't be zero";
        totalTip.innerHTML = "$0.00";
        totalPerson.innerHTML = "$0.00";
    }else if(isNaN(parseFloat(numberPerson.value))){
        errorText.innerHTML = "Field is not a number";
        totalTip.innerHTML = "$0.00";
        totalPerson.innerHTML = "$0.00";
    }else{
        errorText.innerHTML = "";
    }
});
