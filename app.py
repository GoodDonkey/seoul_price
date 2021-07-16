from flask import Flask, request, render_template

app =  Flask(__name__)

@app.route("/", methods=["GET"])
def index_view():
    return render_template("index.html")

if __name__=="__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
