//country data in string array format
var countries = ["Australia","France","India","Japan","United States"];

//This method calls on button click
function dynamicDropdownList(){

    let dropdown = document.createElement("select");
        dropdown.name = "unit2";
        dropdown.id = "unit2";
        dropdown.style.backgroundColor = "black";
        dropdown.style.color = "white";
        dropdown.style.fontSize = "20px";
    for(var i=0;i<countries.length;i++){
        var opt = document.createElement("option");
        opt.text = countries[i];
        opt.value = countries[i];
        dropdown.options.add(opt);
    }

    //Load the dynamically created dropdown in container
    var container=document.getElementById("dropdown-container");
    container.appendChild(dropdown);
}