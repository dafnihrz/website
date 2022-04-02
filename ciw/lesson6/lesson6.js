//Lab 1:
function vote() {
    var t = "Your favorite sport is: ";
    for (i = 0; i < document.myform.sports.length; i++) {
        if (document.myform.sports[i].checked == true) {
            t = t + document.myform.sports[i].value;
        }
    }
    if (t == "Your favorite sport is: ") {
        document.getElementById("txt").value = "Choose a sport";
    } else {
        document.getElementById("txt").value = t;
        document.getElementById("txt1").value = t;
        document.getElementById("txt2").value = t;
    }
}
function upperCase() {
    var x = document.getElementById("txt").value;
    document.getElementById("txt").value = x.toUpperCase();
}
function SayHello() {
    alert("Your mouse is over the text!");
}
function SayGoodbye() {
    alert("Your mouse has left the text!");
}

//Lab 2:
function getCheckedValue(radioObj) {
    if (!radioObj) 
        return "";
    var radioLength = radioObj.length;
    if (radioLength == undefined)
        if (radioObj.checked) 
            return radioObj.value;
        else return "";
    for (var i = 0; i < radioLength; i++) {
        if (radioObj[i].checked) {
            return radioObj[i].value;
        }
    }
    return "";
}
function setCheckedValue(radioObj, newValue) {
    if (!radioObj) 
        return;
    var radioLength = radioObj.length;
    if (radioLength == undefined) {
        radioObj.checked = radioObj.value == newValue.toString();
        return;
    }
    for (var i = 0; i < radioLength; i++) {
        radioObj[i].checked = false;
        if (radioObj[i].value == newValue.toString()) {
            radioObj[i].checked = true;
        }
    }
}