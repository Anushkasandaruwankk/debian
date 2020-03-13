var isPausePrompt = true;
var promptId = 0;


$(document).ready(() => initialize());
async function initialize() {
    var consoleDisplay = document.getElementById("console-display");
    var consoleDisplayInnerHtml = `Welcome to the console of Anushka's Laptop.<br>
    Type 'lscmd' for list down all commands available to use.Type 'help' for help.
    <br>
    Date: <span id="date"></span> Time: <span id="time"></span>
    <br>
    <br>
    example: <br>
    lscmd <br>
    user info
    <div style="display: flex;" id="console-prompt-line-0">
      <span class="console-prompt-uname">anushka</span><span class="console-prompt-host">@debian</span>:~$
      <input type="text" class="console-prompt" id="console-prompt">
    </div>
  </div>`;
    consoleDisplay.innerHTML = "$ Initializing hydra attack";
    await sleep(250);
    consoleDisplay.innerHTML = "$ Initializing hydra attack.";
    await sleep(250);
    consoleDisplay.innerHTML = "$ Initializing hydra attack..";
    await sleep(250);
    consoleDisplay.innerHTML = "$ Initializing hydra attack...";
    await sleep(250);
    consoleDisplay.innerHTML = "$ Initializing hydra attack";
    await sleep(250);
    consoleDisplay.innerHTML = "$ Initializing hydra attack.";
    await sleep(250);
    consoleDisplay.innerHTML = "$ Initializing hydra attack..";
    await sleep(300);
    consoleDisplay.innerHTML += "</br>$ Executing hydra attack...</br>$ hydra -l anushka -P passlist.txt ssh://anushkasandaruwan123456@gmail.com";
    await sleep(800);
    consoleDisplay.innerHTML += "</br>$ Attack Succuess!";
    await sleep(100);
    consoleDisplay.innerHTML += "</br>$ Hail, you are in the system now..";

    var anonymous = `</br></br></br></br></br><center>
    '##:::::'##:'########:'##::::::::'######:::'#######::'##::::'##:'########:</br>
     ##:'##: ##: ##.....:: ##:::::::'##... ##:'##.... ##: ###::'###: ##.....::</br>
     ##: ##: ##: ##::::::: ##::::::: ##:::..:: ##:::: ##: ####'####: ##:::::::</br>
     ##: ##: ##: ######::: ##::::::: ##::::::: ##:::: ##: ## ### ##: ######:::</br>
     ##: ##: ##: ##...:::: ##::::::: ##::::::: ##:::: ##: ##. #: ##: ##...::::</br>
     ##: ##: ##: ##::::::: ##::::::: ##::: ##: ##:::: ##: ##:.:: ##: ##:::::::</br>
    . ###. ###:: ########: ########:. ######::. #######:: ##:::: ##: ########:</br>
    :...::...:::........::........:::......::::.......:::..:::::..::........::</br>                                                                
 </center>`
    consoleDisplay.innerHTML += anonymous;
    await sleep(1600);
    consoleDisplay.innerHTML = consoleDisplayInnerHtml;
    $("#console-display").on("click", function () {
        $("#console-prompt").focus();
    });

    addEventListenerForConsolePrompt()
    setFocusToPrompt()

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var n = new Date();
    var y = n.getFullYear();
    var m = n.getMonth();
    var d = n.getDate();
    var day = n.getDay();

    var sec = n.getSeconds()
    var min = n.getMinutes()
    var hh = n.getHours() > 12 ? n.getHours() - 12 : n.getHours();
    var ampm = n.getHours() > 12 ? "PM" : "AM"
    document.getElementById("date").innerHTML = days[day] + " " + d + " " + months[m] + " " + y;
    document.getElementById("time").innerHTML = hh + ":" + min + ":" + sec + " " + ampm;

}

async function handlePrompt() {
    var consoleDisplay = document.getElementById("console-display");
    var consolePrompt = document.getElementById("console-prompt");
    var consolePromptLine = document.getElementById("console-prompt-line-" + promptId);
    var displayHtml = consoleDisplay.innerHTML;
    var oldPromptLine = consolePromptLine.innerHTML + consolePrompt.value;
    displayHtml = displayHtml.replace(consolePromptLine.innerHTML, oldPromptLine);
    displayHtml = displayHtml.replace(consolePrompt.outerHTML, "");
    consoleDisplay.innerHTML = displayHtml;
    await handleCommand(consolePrompt.value.trim());
    var newPromptLine = consolePromptLine.outerHTML.replace("console-prompt-line-" + promptId, "console-prompt-line-" + ++promptId);
    consoleDisplay.innerHTML += newPromptLine;
    addEventListenerForConsolePrompt();
    setFocusToPrompt();
}

function setFocusToPrompt() {
    document.getElementById("console-prompt").focus();
}

function addEventListenerForConsolePrompt() {
    document.getElementById("console-prompt").addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            handlePrompt()
        }
    });
}

function showErrorCmd(command) {
    var consoleDisplay = document.getElementById("console-display");
    consoleDisplay.innerHTML += "bash: " + command.split(" ")[0] + ": command not found";
}

function showLscmd() {
    var consoleDisplay = document.getElementById("console-display");
    consoleDisplay.innerHTML += "GNU bash, version 5.0.11\(1\)-release \(x86_64-pc-linux-gnu\) These shell commands are defined internally.  Type `help' to see this help</br></br>";
    consoleDisplay.innerHTML += "user info - display user's information</br>";
    consoleDisplay.innerHTML += "open github - open the user's github account</br>";
    consoleDisplay.innerHTML += "open facebook - open the user's facebook account</br>";
    consoleDisplay.innerHTML += "lscmd - display all commands available</br>";
    consoleDisplay.innerHTML += "clear - clear the console</br>";
    consoleDisplay.innerHTML += "help - display help</br></br>";
}

async function handleCommand(command) {
    switch (command) {
        case "":
            break;
        case "lscmd":
            showLscmd();
            break;
        case "clear":
            clear();
            break;
        case "user info":
            userInfo();
            break;
        case "help":
            help();
            break;
        case "open github":
            await openGithub();
            break;
        case "open facebook":
            await openFacebook();
            break;
        default:
            showErrorCmd(command);
            break;
    }
}

function clear() {
    var consoleDisplay = document.getElementById("console-display");
    consoleDisplay.innerHTML = "";
}

function userInfo() {
    var consoleDisplay = document.getElementById("console-display");
    consoleDisplay.innerHTML += "Infomation about logged user</br></br>";
    consoleDisplay.innerHTML += "First name: Anushka Sandaruwan</br>";
    consoleDisplay.innerHTML += "Birthday: 1996-07-05</br>";
    consoleDisplay.innerHTML += "Address: 'Manoj', Walasgala, Dickwella, Sri Lanka</br>";
    consoleDisplay.innerHTML += "Mobile number: <a href=\"callto:0094712492630\">+94712619890</a></br>";
    consoleDisplay.innerHTML += "Email: <a href=\"mailto:anushkasandaruwan123456@gmail.com\">anushkasandaruwan123456@gmail.com</a></br></br>";
}

function help() {
    var consoleDisplay = document.getElementById("console-display");
    consoleDisplay.innerHTML += "Welcome to Anushka's Laptop.</br>";
    consoleDisplay.innerHTML += "Console version: 5.7.26-1+b1 (Debian)</br>";
    consoleDisplay.innerHTML += "This console will help you to observe about the owner of this Laptop</br></br>";
    consoleDisplay.innerHTML += "Type 'lscmd' for list down all commands available in this console</br></br>";
}

async function openGithub() {
    var consoleDisplay = document.getElementById("console-display");
    consoleDisplay.innerHTML += "Opening github profile...</br>";
    await sleep(200);
    window.open("https://www.github.com/Anushkasandaruwankk", "_blank").focus();
    consoleDisplay.innerHTML += "Github profile opened...</br></br>";
}

async function openFacebook() {
    var consoleDisplay = document.getElementById("console-display");
    consoleDisplay.innerHTML += "Opening facebook profile...</br>";
    await sleep(200);
    window.open("https://www.facebook.com/anushka.sandaruwan.1276", "_blank").focus();
    consoleDisplay.innerHTML += "Facebook profile opened...</br></br>";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}