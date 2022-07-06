var moviesBySubscription = {
    Platinum: ["English", "Hindi", "Marathi"],
    Gold: ["Hindi", "Marathi"]


}
function makeSubmenu(value) {
    if (value.length == 0) document.getElementById("languageSelect").innerHTML = "<option></option>";
    else {
        var subscriptionOptions = "";
        for (let subscriptionId in moviesBySubscription[value]) {
            subscriptionOptions += "<option>" + moviesBySubscription[value][subscriptionId] + "</option>";
        }
        document.getElementById("languageSelect").innerHTML = subscriptionOptions;
    }
}
function displaySelected() {
    var subscription = document.getElementById("subscriptionSelect").value;
    var language = document.getElementById("languageSelect").value;
    console.log(language);
    alert(subscription + "\n" + language);
    if (language == "English") {
        window.location.replace("HollywoodMovies.html");
    }
    else
    if (language == "Hindi") {
        window.location.replace("BollywoodMovies.html");
    }
    else
    if (language == "Marathi") {
        window.location.replace("MarathiMovies.html");
    }
}
function resetSelection() {
    document.getElementById("subscriptionSelect").selectedIndex = 0;
    document.getElementById("languageSelect").selectedIndex = 0;
}

