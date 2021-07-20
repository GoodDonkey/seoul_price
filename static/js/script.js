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
                document.getElementById("iframe01").innerHTML = ``;
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
            document.getElementById("iframe02").innerHTML = `<iframe src="http://localhost:5601/goto/875a26a1aed54c975c53dd6b3b291a51" height="800" width="1600"></iframe>`;
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
            document.getElementById("iframe03").innerHTML = `<iframe src="http://localhost:5601/goto/73b5c561e5c7647c187920d7034b950d" height="800" width="1600"></iframe>`;
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
            document.getElementById("iframe04").innerHTML = `<iframe src="http://localhost:5601/goto/0155f600e3de6e0c35a65a39126bce31" height="800" width="1600"></iframe>`;
            document.getElementById("iframe04").style.display = "block";
        }
    }    
}
