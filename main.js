document.addEventListener("DOMContentLoaded", init);

let mintaszoveg, betumeret, szovegszin, hatterszin, alaphelyzet, szoveg;

function init() {
    
    document.getElementById("mintaszovegId").addEventListener("change", mintaszovegF);
    document.getElementById("betumeretId").addEventListener("change", betumeretF);
    document.getElementById("szovegszinId").addEventListener("change", szovegszinF);
    document.getElementById("hatterszinId").addEventListener("change", hatterszinF);
    document.getElementById("alaphelyzetGomb").addEventListener("click", alaphelyzetF);

}

function mintaszovegF() {
    let m = document.getElementById("mintaszovegId").value;
    
    if (m == "") {
        document.getElementById("hiba").innerHTML = "A mintaszöveg nem lehet üres!";
    } else {
        document.getElementById("hiba").innerHTML = "";
    }
}

function betumeretF() {

}

function szovegszinF() {

}

function hatterszinF() {

}

function alaphelyzetF(e) {
    console.log("adom");
}