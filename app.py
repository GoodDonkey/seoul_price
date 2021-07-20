from flask import Flask, request, render_template, url_for

app =  Flask(__name__)

@app.route("/", methods=["GET"])
def index_view():
    return render_template("index.html")

@app.route("/showIframe", methods=["GET"])
def iframe():
    data =''
    return data

@app.route("/login", methods=["GET"])
def login():
    return render_template("login.html")

if __name__=="__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
