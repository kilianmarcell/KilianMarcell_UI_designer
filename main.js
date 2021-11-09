document.addEventListener("DOMContentLoaded", init);

let mintaszoveg, betumeret, szovegszin, hatterszin, alaphelyzet, szoveg;

function init() {
    
    document.getElementById("mintaszovegId").addEventListener("input", mintaszovegF);
    document.getElementById("betumeretId").addEventListener("input", betumeretF);
    document.getElementById("szovegszinId").addEventListener("input", szovegszinF);
    document.getElementById("hatterszinId").addEventListener("input", hatterszinF);
    document.getElementById("alaphelyzetGomb").addEventListener("click", alaphelyzetF);

    document.getElementById("mintaszovegId").value = "Árvíztűrő tükörfúrógép";
    document.getElementById("szoveg").innerHTML = "Árvíztűrő tükörfúrógép";
    document.getElementById("betumeretId").value = 12;
    document.getElementById("szovegszinId").value = "#000000";
    document.getElementById("hatterszinId").value = "#FFFFFF";

}

function mintaszovegF() {

    let m = document.getElementById("mintaszovegId").value;
    
    if (m.replaceAll(' ', '') == "") {

        document.getElementById("hiba").innerHTML = "A mintaszöveg nem lehet üres!";
        document.getElementById("szoveg").innerHTML = m;

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

    let s = document.getElementById("szovegszinId").value;

    document.getElementById("szoveg").style.color = s;

}

function hatterszinF() {

    let s = document.getElementById("hatterszinId").value;

    document.getElementById("elonezet").style.backgroundColor = s;

}

function alaphelyzetF() {
    
    document.getElementById("mintaszovegId").value = "Árvíztűrő tükörfúrógép";
    document.getElementById("betumeretId").value = 12;
    document.getElementById("szoveg").innerHTML = "Árvíztűrő tükörfúrógép";
    document.getElementById("szoveg").style.fontSize = 12 + "pt";
    document.getElementById("szovegszinId").value = "#000000";
    document.getElementById("szoveg").style.color = "#000000";
    document.getElementById("hatterszinId").value = "#FFFFFF";
    document.getElementById("elonezet").style.backgroundColor = "white";

}