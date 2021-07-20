function showContents01() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "showContents01");
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contents_div").style.display = "block";

        };
    };  
};


function importIframe() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "showIframe");
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("iframe_div").style.display = "block";
            document.getElementById("iframe_div").innerHTML = `<iframe src="http://localhost:5601/app/visualize#/edit/491da7b0-e604-11eb-850e-0f116349053a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))" height="100%" width="100%"></iframe>`

        }
    }    
}

// 하나의 함수로 쓸 수 있을거 같은데 일단 테스트 용으로 따로 만들어봄
function importIframe2() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "showIframe");
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("iframe_div2").style.display = "block";
            document.getElementById("iframe_div2").innerHTML = `<iframe src="http://localhost:5601/app/visualize#/edit/491da7b0-e604-11eb-850e-0f116349053a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))" height="100%" width="100%"></iframe>`

        }
    }    
}

function importIframe3() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "showIframe");
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("iframe_div3").style.display = "block";
            document.getElementById("iframe_div3").innerHTML = `<iframe src="http://localhost:5601/app/visualize#/edit/491da7b0-e604-11eb-850e-0f116349053a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))" height="100%" width="100%"></iframe>`

        }
    }    
}
