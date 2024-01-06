function PrintMessage1() {
   
    // let usermessage = document.getElementById("user-message");
    let messageDisplay = document.getElementById("message-display");

    let greeting =  "hello " + userName.value + "!";

    messageDisplay.innerHTML = greeting;

    
}
function PrintMessage2() {
   
    let usermessage = document.getElementById("user-message2");
    let messageDisplay = document.getElementById("message-display2");

    let greeting =  userName.value + ": " + usermessage.value;

    messageDisplay.innerHTML = greeting;

    usermessage.value = "";
}

let userName = document.getElementById("user-message");

console.log("goobers!");
