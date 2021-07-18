from flask import Flask, request, render_template, url_for

app =  Flask(__name__)

@app.route("/", methods=["GET"])
def index_view():
    return render_template("index.html")


@app.route("/graph", methods=["GET"])
def show_graph():
    return 'anydata'

if __name__=="__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
