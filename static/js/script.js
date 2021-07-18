
function showGraph() {
    const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data = this.responseText;


                document.getElementById("iframe_div").style.display = "block";
            }
        }    
    xhttp.open("GET", "graph");
    xhttp.send();
}

