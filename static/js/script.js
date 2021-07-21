function iframe01() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "iframe01");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main").style.display = "none";
            document.getElementById("iframe02").style.display = "none";
            document.getElementById("iframe03").style.display = "none";
            document.getElementById("iframe04").style.display = "none";
            document.getElementById("iframe01").innerHTML = `<iframe src="http://localhost:5601/goto/474ee349f8640c61e12820fb9687a079" height="800" width="1400"></iframe>`;
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
            document.getElementById("main").style.display = "none";
            document.getElementById("iframe01").style.display = "none";
            document.getElementById("iframe03").style.display = "none";
            document.getElementById("iframe04").style.display = "none";
            document.getElementById("iframe02").innerHTML = `<iframe src="http://localhost:5601/goto/c41cdc22d2168c66f2fa53a1cf3ed735" height="800" width="1000"></iframe><iframe src="http://localhost:5601/goto/62172579e14bca15986a90e1c7e06c50" height="800" width="800"></iframe>`;
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
            document.getElementById("main").style.display = "none";
            document.getElementById("iframe01").style.display = "none";
            document.getElementById("iframe02").style.display = "none";
            document.getElementById("iframe04").style.display = "none";
            document.getElementById("iframe03").innerHTML = `<iframe src="http://localhost:5601/goto/c2f4dc192a0a46b02b707c68453ffe2b" height="800" width="1000"></iframe><iframe src="http://localhost:5601/goto/c9f7855aad975417012e630cf9450f1e" height="800" width="800"></iframe>`;
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
            document.getElementById("main").style.display = "none";
            document.getElementById("iframe01").style.display = "none";
            document.getElementById("iframe02").style.display = "none";
            document.getElementById("iframe03").style.display = "none";
            document.getElementById("iframe04").innerHTML = `<iframe src="http://localhost:5601/goto/d3a678f22da278b74a34797865817cc9" height="800" width="1000"></iframe><iframe src="http://localhost:5601/goto/5407a469451b9200c94033995dbd449b" height="800" width="800"></iframe>`;
            document.getElementById("iframe04").style.display = "block";
        }
    }
}
