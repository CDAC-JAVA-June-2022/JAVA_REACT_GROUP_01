var moviesBySubscription = {
Platinum: ["English","Hindi","Marathi"],
Gold: ["Hindi","Marathi"]


}
function makeSubmenu(value) {
if(value.length==0) document.getElementById("languageSelect").innerHTML = "<option></option>";
else {
var subscriptionOptions = "";
for(subscriptionId in moviesBySubscription[value]) {
    subscriptionOptions+="<option>"+moviesBySubscription[value][subscriptionId]+"</option>";
}
document.getElementById("languageSelect").innerHTML =subscriptionOptions;
}
}
function displaySelected() { var subscription = document.getElementById("subscriptionSelect").value;
var language = document.getElementById("languageSelect").value;
alert(subscription+"\n"+language);
window.location.replace("EnglishPlatinum.html")
}
function resetSelection() {
document.getElementById("subscriptionSelect").selectedIndex = 0;
document.getElementById("languageSelect").selectedIndex = 0;
}

