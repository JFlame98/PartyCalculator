'use strict';

var currentNumber = "";
var lastAction = "";
var currentTotal = 0;

function setConsole(value) {
    $("#console").html(value);
}

$(function () {
    $(".number").click(function() {
        currentNumber += $(this).val();
        setConsole(currentNumber);
    });
    
    $(".action").click(function() {
        var newValue = parseFloat(currentNumber);
        var action = $(this).val();
        
        if (action !== "equals" && action !== "AC") {
            lastAction = action;
        }

        currentNumber = "";
        
        if (action === "AC") {
            currentNumber = "";
            currentTotal = 0;
            setConsole(0);
        }
        else if (action === "equals") {
            currentTotal = calculate(currentTotal, newValue, lastAction);
            setConsole(currentTotal);
        }
        else {
            currentTotal = calculate(currentTotal, newValue, action);
            setConsole(currentTotal);
        }
    });
    $(".party").click(function() {
        $('#pty1').show();
        $('#pty2').show();
        console.log("party");
    });
    $(".partydone").click(function() {
        $('#pty1').hide();
        $('#pty2').hide();
    });
});
