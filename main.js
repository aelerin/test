const changecolor = () => {
    var select = document.querySelector("#button");
    If(select.className == "ButtonColor"); {
        select.className = "ButtonBlue";
    }
    If(select.className == "ButtonBlue"); {
        select.className = "ButtonRed";
    }

    If(select.className === "ButtonRed"); {
        select.className = "ButtonBlue";
    }

}





document.querySelector("#button").addEventListener("onclick", changecolor)

