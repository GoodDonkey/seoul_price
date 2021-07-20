function iframe01() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "iframe01");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("iframe02").style.display = "none";
                document.getElementById("iframe03").style.display = "none";
                document.getElementById("iframe04").style.display = "none";
                document.getElementById("iframe01").style.display = "block";

            }
        }    
}

function iframe02() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "iframe02");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("iframe01").style.display = "none";
            document.getElementById("iframe03").style.display = "none";
            document.getElementById("iframe04").style.display = "none";
            document.getElementById("iframe02").style.display = "block";
        }
    }    
}

function iframe03() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "iframe03");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("iframe01").style.display = "none";
            document.getElementById("iframe02").style.display = "none";
            document.getElementById("iframe04").style.display = "none";
            document.getElementById("iframe03").style.display = "block";
            
        }
    }    
}

function iframe04() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "iframe04");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("iframe01").style.display = "none";
            document.getElementById("iframe02").style.display = "none";
            document.getElementById("iframe03").style.display = "none";
            document.getElementById("iframe04").style.display = "block";
        }
    }    
}
