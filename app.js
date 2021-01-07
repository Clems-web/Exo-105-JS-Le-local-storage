const storage = window.localStorage;
storage.setItem("taille", "26");
storage.setItem("type", "Roboto");
storage.setItem("theme", "Jaune");

let divResult = document.getElementById("result");

function MaFunction() {
    divResult.innerHTML = storage.getItem("theme");
    console.log("Thème " + storage.getItem("theme") + ", type " + storage.getItem("type") + " et police de caractères " +
        storage.getItem("taille") + "px");
}

MaFunction();