function importIframe() {
    xhttp.open("GET", "showIframe");
    xhttp.send();
    const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("iframe").style.display = "block";

            }
        }    
}
