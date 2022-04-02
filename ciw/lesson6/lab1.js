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