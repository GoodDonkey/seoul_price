from flask import Flask, request, render_template, url_for

app =  Flask(__name__)

@app.route("/", methods=["GET"])
def index_view():
    return render_template("index.html")

@app.route("/iframe01", methods=["POST"])
def iframe01():
    return render_template("index.html")

@app.route("/iframe02", methods=["POST"])
def iframe02():
    return render_template("index.html")

@app.route("/iframe03", methods=["POST"])
def iframe03():
    return render_template("index.html")

@app.route("/iframe04", methods=["POST"])
def iframe04():
    return render_template("index.html")

@app.route("/login", methods=["GET"])
def login():
    return render_template("login.html")

if __name__=="__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
