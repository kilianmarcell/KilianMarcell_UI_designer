document.addEventListener("DOMContentLoaded", init);

let mintaszoveg, betumeret, szovegszin, hatterszin, alaphelyzet, szoveg;

function init() {
    
    document.getElementById("mintaszovegId").addEventListener("input", mintaszovegF);
    document.getElementById("betumeretId").addEventListener("input", betumeretF);
    document.getElementById("szovegszinId").addEventListener("input", szovegszinF);
    document.getElementById("hatterszinId").addEventListener("input", hatterszinF);
    document.getElementById("alaphelyzetGomb").addEventListener("click", alaphelyzetF);

}

function mintaszovegF() {
    let m = document.getElementById("mintaszovegId").value;
    
    if (m == "") {
        document.getElementById("hiba").innerHTML = "A mintaszöveg nem lehet üres!";
    } else {
        document.getElementById("hiba").innerHTML = "";
        document.getElementById("szoveg").innerHTML = m;
    }
}

function betumeretF() {
    let b = document.getElementById("betumeretId").value;
    
    document.getElementById("szoveg").style.fontSize = b + "pt";
}

function szovegszinF() {
}

function hatterszinF() {
}

function alaphelyzetF() {
}